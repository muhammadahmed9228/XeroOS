import { useMemo, useState } from "react";
import { Info } from "lucide-react";
import { plans } from "../../data/plans";

const money = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(value);

export default function PackageSelector() {
  const [contacts, setContacts] = useState(5000);
  const [users, setUsers] = useState(5);
  const [workflows, setWorkflows] = useState(3);
  const [email, setEmail] = useState(false);
  const [whatsapp, setWhatsapp] = useState(false);
  const [calling, setCalling] = useState(false);
  const [aiAgent, setAiAgent] = useState(false);
  const [annual, setAnnual] = useState(false);

  const result = useMemo(() => {
    const suitable = plans.filter(
      (plan) =>
        contacts <= Number(plan.contacts.replaceAll(",", "")) &&
        users <= (plan.users === "Unlimited" ? Infinity : plan.users) &&
        workflows <= plan.workflows
    );

    let plan = suitable[0] ?? null;

    if (aiAgent && plan?.name === "Core") {
      plan = plans.find((item) => item.name === "Growth");
    }

    const custom = !plan;
    const aiIncluded = plan?.name === "Pro";
    const aiSetup = aiAgent && plan?.name === "Growth" ? 999 : 0;
    const aiMonthly = aiAgent && plan?.name === "Growth" ? 99 : 0;

    const channelSetup =
      plan?.name === "Core" ? (Number(email) + Number(whatsapp)) * 499 : 0;
    const channelMonthly =
      plan?.name === "Core" ? (Number(email) + Number(whatsapp)) * 24 : 0;

    const subscription = plan
      ? annual
        ? plan.annual / 12
        : plan.monthly
      : customPlanPrice;

    const setup = (plan?.setup ?? 0) + aiSetup + channelSetup;
    const recurring = subscription + aiMonthly + channelMonthly;

    return {
      plan,
      custom,
      aiIncluded,
      subscription,
      setup,
      recurring,
      billingTotal:
        (annual ? plan?.annual ?? customPlanPrice * 12 : plan?.monthly ?? customPlanPrice) +
        (annual ? (aiMonthly + channelMonthly) * 12 : aiMonthly + channelMonthly) +
        setup,
      annualTotal: plan ? plan.annual + plan.setup + aiSetup + channelSetup : null,
      monthlyFirstPayment: plan
        ? plan.monthly + plan.setup + aiSetup + channelSetup
        : null,
      aiSetup,
      aiMonthly,
      channelSetup,
      channelMonthly,
      calling,
    };
  }, [contacts, users, workflows, email, whatsapp, calling, aiAgent, annual]);

  return (
    <section className="rounded-3xl border border-[#373737] bg-[#1b1b1b] p-5 shadow-sm sm:p-8">
      <div className="mb-8 max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ffd400]">
          Package selector
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          Find your best-fit plan
        </h2>
        <p className="mt-3 leading-7 text-[#b8b8b8]">
          Tell us what your team needs. We'll recommend the lowest suitable plan.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-2xl border border-[#373737] bg-[#242424] p-5 sm:p-6">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold">Tell us about your team</h3>
              <p className="mt-1 text-sm text-[#b8b8b8]">These inputs shape your recommendation.</p>
            </div>
            <span className="rounded-full bg-[#2b2b2b] px-3 py-1 text-xs font-semibold text-[#b8b8b8]">
              Step 1 of 2
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
          <label className="block">
            <span className="mb-2 block text-sm font-semibold">
              CRM contacts
            </span>
            <input
              type="number"
              min="1"
              value={contacts}
              onChange={(e) => setContacts(Math.max(1, Number(e.target.value) || 1))}
              className="w-full rounded-xl border border-[#373737] bg-[#1b1b1b] px-4 py-3 text-white outline-none transition placeholder:text-[#b8b8b8] focus:border-[#ffd400]"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold">Team size</span>
            <input
              type="number"
              min="1"
              value={users}
              onChange={(e) => setUsers(Math.max(1, Number(e.target.value) || 1))}
              className="w-full rounded-xl border border-[#373737] bg-[#1b1b1b] px-4 py-3 text-white outline-none transition placeholder:text-[#b8b8b8] focus:border-[#ffd400]"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold">
              Active workflows
            </span>
            <input
              type="number"
              min="0"
              value={workflows}
              onChange={(e) =>
                setWorkflows(Math.max(0, Number(e.target.value) || 0))
              }
              className="w-full rounded-xl border border-[#373737] bg-[#1b1b1b] px-4 py-3 text-white outline-none transition placeholder:text-[#b8b8b8] focus:border-[#ffd400]"
            />
          </label>
          </div>

          <div className="mt-7 border-t border-[#373737] pt-6">
            <div className="mb-3">
              <p className="text-sm font-semibold">Channels and add-ons</p>
              <p className="mt-1 text-xs text-[#b8b8b8]">Select anything you want included in the estimate.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Email connection", email, setEmail],
                ["WhatsApp connection", whatsapp, setWhatsapp],
                ["Calling", calling, setCalling],
                ["AI agent", aiAgent, setAiAgent],
              ].map(([label, checked, setter]) => (
                <label
                  key={label}
                  className={`flex cursor-pointer items-center gap-3 rounded-xl border px-3 py-3 text-sm transition ${
                    checked
                      ? "border-[#ffd400]/60 bg-[#ffd400]/10 text-white"
                      : "border-[#373737] bg-[#1b1b1b] text-[#d0d0d0] hover:border-[#ffd400]/40"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => setter(e.target.checked)}
                    className="h-4 w-4 accent-[#ffd400]"
                  />
                  {label}
                </label>
              ))}
            </div>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-[#373737] pt-6">
            <div>
              <span className="text-sm font-semibold">Billing cycle</span>
              <p className="mt-1 text-xs text-[#b8b8b8]">Annual billing is charged upfront.</p>
            </div>
            <div className="flex rounded-full border border-[#373737] bg-[#1b1b1b] p-1">
              <button
                onClick={() => setAnnual(false)}
                className={`rounded-full px-4 py-2 text-sm ${
                  !annual ? "bg-[#ffd400] text-black" : "text-[#b8b8b8]"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={`rounded-full px-4 py-2 text-sm ${
                  annual ? "bg-[#ffd400] text-black" : "text-[#b8b8b8]"
                }`}
              >
                Annual
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-[#373737] bg-[#242424] p-5 text-white sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#ffd400]">Your recommendation</p>
              <h3 className="mt-2 text-3xl font-semibold">
                {result.custom ? "Custom" : result.plan.name}
              </h3>
            </div>
            {!result.custom && (
              <div className="text-right">
                <p className="text-xs text-[#b8b8b8]">Starting at</p>
                <p className="mt-1 text-xl font-semibold">{money(result.subscription)}<span className="text-sm font-normal text-[#b8b8b8]">/mo</span></p>
              </div>
            )}
          </div>
          <p className="mt-2 text-sm leading-6 text-[#d0d0d0]">
            {result.custom
              ? "Your requirements exceed standard plan limits. Request a custom quote."
              : result.plan.description}
          </p>

          {!result.custom && (
            <div className="mt-6 space-y-3 rounded-xl border border-[#373737] bg-[#1b1b1b] p-4 text-sm">
              <div className="flex justify-between gap-4">
                <span className="text-[#d0d0d0]">Subscription</span>
                <span>{money(result.subscription)}/mo</span>
              </div>
              {result.aiMonthly > 0 && (
                <div className="flex justify-between gap-4">
                  <span className="text-[#d0d0d0]">AI agent</span>
                  <span>{money(result.aiMonthly)}/mo</span>
                </div>
              )}
              {result.channelMonthly > 0 && (
                <div className="flex justify-between gap-4">
                  <span className="text-[#d0d0d0]">Email / WhatsApp</span>
                  <span>{money(result.channelMonthly)}/mo</span>
                </div>
              )}
              <div className="flex justify-between gap-4 border-t border-[#373737] pt-4 font-semibold">
                <span>Recurring total</span>
                <span>{money(result.recurring)}/mo</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-[#d0d0d0]">One-time setup</span>
                <span>{money(result.setup)}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-[#d0d0d0]">
                  {annual ? "First annual invoice" : "First monthly invoice"}
                </span>
                <span>{money(result.billingTotal)}</span>
              </div>
            </div>
          )}

          {result.custom && (
            <a
              href="mailto:hello@9xero.com?subject=XeroOS%20Custom%20Plan"
              className="mt-6 inline-block rounded-full bg-[#ffd400] px-5 py-3 font-semibold text-black hover:bg-[#eac300]"
            >
              Request a Quote
            </a>
          )}

          <div className="mt-6 flex gap-2 rounded-xl border border-[#373737] bg-[#1b1b1b] p-3 text-xs leading-5 text-[#d0d0d0]">
            <Info size={16} className="mt-0.5 shrink-0" />
            Provider subscriptions, messaging, calling and AI usage are not
            included. Non-standard channel pricing requires a quote.
            {result.calling && " Calling pricing requires a quote when selected."}
          </div>
        </div>
      </div>
    </section>
  );
}

const customPlanPrice = 499;
