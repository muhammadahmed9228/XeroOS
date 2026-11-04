import { useMemo, useState } from "react";
import { Info } from "lucide-react";
import { plans } from "../../data/plans";

const categories = [
  ["CRM", "crm"],
  ["Email", "email"],
  ["WhatsApp", "whatsapp"],
  ["Calling", "calling"],
  ["Automations", "automation"],
  ["Booking", "booking"],
  ["AI tools", "ai"],
  ["Other tools", "other"],
];

const money = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(value);

export default function SavingsCalculator() {
  const [costs, setCosts] = useState(
    Object.fromEntries(categories.map(([, key]) => [key, ""]))
  );
  const [planName, setPlanName] = useState("Growth");
  const [annual, setAnnual] = useState(false);
  const [includeSetup, setIncludeSetup] = useState(false);
  const [amortizationMonths, setAmortizationMonths] = useState(12);
  const [aiAgent, setAiAgent] = useState(false);

  const selectedPlan = plans.find((plan) => plan.name === planName);

  const result = useMemo(() => {
    const existing = Object.values(costs).reduce(
      (total, value) => total + Math.max(0, Number(value) || 0),
      0
    );

    const subscription = annual
      ? selectedPlan.annual / 12
      : selectedPlan.monthly;

    const aiMonthly = aiAgent && planName === "Growth" ? 99 : 0;
    const aiSetup = aiAgent && planName === "Growth" ? 999 : 0;

    const setup = selectedPlan.setup + aiSetup;
    const amortizedSetup = includeSetup
      ? setup / Math.max(1, amortizationMonths)
      : 0;

    const xeroos = subscription + aiMonthly + amortizedSetup;
    const difference = existing - xeroos;

    return {
      existing,
      subscription,
      aiMonthly,
      setup,
      amortizedSetup,
      xeroos,
      difference,
    };
  }, [
    costs,
    selectedPlan,
    annual,
    aiAgent,
    planName,
    includeSetup,
    amortizationMonths,
  ]);

  return (
    <section className="rounded-3xl border border-[#373737] bg-[#1b1b1b] p-5 shadow-sm sm:p-8">
      <div className="mb-8 max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ffd400]">
          Savings calculator
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          Compare your current tools with XeroOS
        </h2>
        <p className="mt-3 leading-7 text-[#b8b8b8]">
          Enter your current monthly software costs to estimate the difference.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-2xl border border-[#373737] bg-[#242424] p-5 sm:p-6">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold">Your current monthly costs</h3>
              <p className="mt-1 text-sm text-[#b8b8b8]">Add what you currently pay for each tool.</p>
            </div>
            <span className="rounded-full bg-[#2b2b2b] px-3 py-1 text-xs font-semibold text-[#b8b8b8]">
              Step 1 of 2
            </span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {categories.map(([label, key]) => (
              <label
                key={key}
                className="rounded-xl border border-[#373737] bg-[#1b1b1b] p-3 text-sm transition focus-within:border-[#ffd400]"
              >
                <span className="mb-2 block font-medium text-[#d0d0d0]">{label}</span>
                <div className="flex w-full items-center rounded-lg border border-[#373737] px-3">
                  <span className="text-[#b8b8b8]">$</span>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={costs[key]}
                    onChange={(e) =>
                      setCosts((previous) => ({
                        ...previous,
                        [key]: e.target.value,
                      }))
                    }
                    className="w-full bg-transparent px-2 py-2.5 text-right text-white outline-none"
                    placeholder="0.00"
                  />
                </div>
              </label>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between rounded-xl bg-[#2b2b2b] px-4 py-3">
            <span className="text-sm text-[#b8b8b8]">Current monthly total</span>
            <span className="font-semibold text-white">{money(result.existing)}</span>
          </div>

          <div className="mt-7 rounded-2xl border border-[#373737] bg-[#1b1b1b] p-4 sm:p-5">
            <div className="mb-4">
              <h3 className="font-semibold">XeroOS estimate</h3>
              <p className="mt-1 text-sm text-[#b8b8b8]">Choose the setup you want to compare.</p>
            </div>
            <label className="mb-4 block">
              <span className="mb-2 block text-sm font-medium">Plan</span>
              <select
                value={planName}
                onChange={(e) => setPlanName(e.target.value)}
                className="w-full rounded-xl border border-[#373737] bg-[#242424] px-4 py-3 text-white outline-none focus:border-[#ffd400]"
              >
                {plans.map((plan) => (
                  <option key={plan.name} value={plan.name}>
                    {plan.name}
                  </option>
                ))}
              </select>
            </label>

            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-medium">Billing</span>
              <div className="flex rounded-full border border-[#373737] bg-[#242424] p-1">
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

            {planName === "Growth" && (
              <label className="mb-4 flex items-center gap-3 text-sm">
                <input
                  type="checkbox"
                  checked={aiAgent}
                  onChange={(e) => setAiAgent(e.target.checked)}
                  className="h-4 w-4 accent-[#ffd400]"
                />
                Include Growth AI agent ($99/mo + $999 setup)
              </label>
            )}

            <label className="flex items-center gap-3 text-sm">
              <input
                type="checkbox"
                checked={includeSetup}
                onChange={(e) => setIncludeSetup(e.target.checked)}
                  className="h-4 w-4 accent-[#ffd400]"
              />
              Include amortized setup fees
            </label>

            {includeSetup && (
              <label className="mt-4 block">
                <span className="mb-2 block text-sm font-medium">
                  Amortization period (months)
                </span>
                <input
                  type="number"
                  min="1"
                  max="60"
                  value={amortizationMonths}
                  onChange={(e) =>
                    setAmortizationMonths(
                      Math.max(1, Number(e.target.value) || 1)
                    )
                  }
                  className="w-full rounded-xl border border-[#373737] bg-[#242424] px-4 py-3 text-white outline-none focus:border-[#ffd400]"
                />
              </label>
            )}
          </div>
        </div>

        <div className="rounded-2xl border border-[#373737] bg-[#242424] p-5 text-white sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#ffd400]">Monthly comparison</p>
              <h3 className="mt-2 text-xl font-semibold">Your potential savings</h3>
            </div>
            <span className="rounded-full bg-[#2b2b2b] px-3 py-1 text-xs text-[#b8b8b8]">Step 2 of 2</span>
          </div>

          <div className="mt-6 space-y-5">
            <div>
              <p className="text-sm text-[#b8b8b8]">Your current tools</p>
              <p className="mt-1 text-3xl font-semibold">{money(result.existing)}</p>
            </div>
            <div>
              <p className="text-sm text-[#b8b8b8]">XeroOS estimate</p>
              <p className="mt-1 text-3xl font-semibold">{money(result.xeroos)}</p>
            </div>

            <div className="rounded-xl border border-[#ffd400]/30 bg-[#ffd400]/10 p-4">
              <p className="text-sm text-[#b8b8b8]">
                {result.difference >= 0 ? "Estimated monthly savings" : "Estimated additional cost"}
              </p>
              <p
                className={`mt-1 text-3xl font-semibold ${
                  result.difference >= 0 ? "text-[#ffd400]" : "text-[#f7f7f7]"
                }`}
              >
                {money(Math.abs(result.difference))}
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-[#373737] bg-[#1b1b1b] p-4 text-xs leading-5 text-[#d0d0d0]">
            <div className="flex gap-2">
              <Info size={16} className="mt-0.5 shrink-0" />
              <p>
                Provider subscriptions, messaging, calling, AI usage, taxes and
                unknown usage charges are excluded. This is an estimate, not a
                guaranteed saving.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
