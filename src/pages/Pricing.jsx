import { useState } from "react";
import { Check, ChevronDown, ChevronUp, ArrowUpRight } from "lucide-react";
import { plans, customPlan } from "../data/plans";
import PackageSelector from "../features/calculators/PackageSelector";
import SavingsCalculator from "../features/calculators/SavingsCalculator";

const faqs = [
  {
    q: "Can I pay annually?",
    a: "Yes. Annual billing is priced at the equivalent of 10 monthly payments, giving you 2 months free.",
  },
  {
    q: "Are setup fees included in the subscription?",
    a: "No. Setup fees are charged separately from your recurring subscription.",
  },
  {
    q: "Are messaging and AI usage included?",
    a: "Provider usage charges for messaging, calling, AI and other external services are separate where applicable.",
  },
  {
    q: "Can I get a custom plan?",
    a: "Yes. Contact our team to discuss your requirements and receive a tailored quote.",
  },
];

function PlanCard({ plan, annual }) {
  const price = annual ? plan.annual : plan.monthly;

  return (
    <article
      className={`relative flex flex-col rounded-3xl border p-7 ${
        plan.popular
          ? "border-[#ffd400] bg-[#1b1b1b] shadow-xl shadow-black/20"
          : "border-[#373737] bg-[#1b1b1b]"
      }`}
    >
      {plan.popular && (
        <span className="absolute -top-3 left-7 rounded-full bg-[#ffd400] px-3 py-1 text-xs font-bold text-black">
          Most popular
        </span>
      )}

      <h2 className="text-xl font-semibold">{plan.name}</h2>
      <p className="mt-2 min-h-12 text-sm leading-6 text-[#b8b8b8]">
        {plan.description}
      </p>

      <div className="mt-6">
        <span className="text-4xl font-bold tracking-tight">${price}</span>
        <span className="text-[#b8b8b8]">/{annual ? "year" : "month"}</span>
      </div>
      {annual && (
        <p className="mt-1 text-sm text-emerald-700">
          Equivalent to ${Math.round(price / 12)}/month
        </p>
      )}

      <p className="mt-4 text-sm text-[#b8b8b8]">
        One-time setup: <strong className="text-white">${plan.setup}</strong>
      </p>

      <a
        href="https://9xero.com/free-quote"
        className="mt-6 block rounded-full bg-[#2a2828] px-5 py-3 text-center text-sm font-semibold text-white hover:bg-[#3a3737]"
      >
        Get Started <ArrowUpRight className="ml-1 inline" size={16} />
      </a>

      <div className="my-7 border-t border-[#373737]" />
      <p className="mb-4 text-sm font-semibold">Plan includes</p>
      <ul className="space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-2 text-sm text-[#b8b8b8]">
            <Check className="shrink-0 text-[#ffd400]" size={17} />
            {feature}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const [comparisonOpen, setComparisonOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <section className="bg-[#202020] px-5 py-20 text-center lg:px-8">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#ffd400]">
          Simple, transparent pricing
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          The right system for your sales team.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#b8b8b8]">
          Choose a plan based on your contacts, workflows and team needs.
          Setup and third-party usage charges are shown separately.
        </p>

        <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#373737] bg-[#1b1b1b] p-1.5">
          <button
            onClick={() => setAnnual(false)}
            className={`rounded-full px-5 py-2 text-sm font-semibold ${
              !annual ? "bg-[#1b1b1b] text-white" : "text-[#b8b8b8]"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setAnnual(true)}
            className={`rounded-full px-5 py-2 text-sm font-semibold ${
              annual ? "bg-[#1b1b1b] text-white" : "text-[#b8b8b8]"
            }`}
          >
            Annual <span className="text-emerald-500">Save 2 months</span>
          </button>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} annual={annual} />
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-7xl rounded-3xl bg-[#1b1b1b] p-8 text-white sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-[#ffd400]">Custom</p>
            <h2 className="mt-2 text-2xl font-semibold">
              Need something tailored?
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-[#d0d0d0]">
              Custom requirements, larger contact volumes or specialized
              workflows? Let's discuss a plan for your team.
            </p>
            <p className="mt-3 text-sm text-[#d0d0d0]">
              Starting from ${customPlan.monthly}/month · Custom setup quoted
              separately
            </p>
          </div>
          <a
            href="mailto:hello@9xero.com?subject=XeroOS%20Custom%20Plan"
            className="mt-6 inline-block shrink-0 rounded-full bg-[#ffd400] px-6 py-3 font-semibold text-black hover:bg-[#eac300] sm:mt-0"
          >
            Request a Quote
          </a>
        </div>
      </section>

      <section className="bg-[#202020] px-5 py-20 lg:px-8">
  <div className="mx-auto max-w-7xl space-y-12">
    <PackageSelector />
    <SavingsCalculator />
  </div>
</section>

      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <button
            onClick={() => setComparisonOpen(!comparisonOpen)}
            className="flex w-full items-center justify-between rounded-2xl border border-[#373737] p-5 text-left font-semibold"
          >
            Compare plan features
            {comparisonOpen ? <ChevronUp /> : <ChevronDown />}
          </button>

          {comparisonOpen && (
            <div className="mt-4 overflow-x-auto rounded-2xl border border-[#373737]">
              <table className="w-full min-w-[600px] text-left text-sm">
                <thead className="bg-[#202020]">
                  <tr>
                    <th className="p-4">Feature</th>
                    {plans.map((plan) => (
                      <th key={plan.name} className="p-4">
                        {plan.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["CRM contacts", ...plans.map((p) => p.contacts)],
                    ["Users", ...plans.map((p) => p.users)],
                    ["Active workflows", ...plans.map((p) => p.workflows)],
                    ["Setup fee", ...plans.map((p) => `$${p.setup}`)],
                    [
                      "Managed setup",
                      "Not included",
                      "3 standard",
                      "5 standard + 2 advanced",
                    ],
                    ["AI agents", "Available as add-on", "Available as add-on", "1 included"],
                  ].map(([label, ...values]) => (
                    <tr key={label} className="border-t border-[#373737]">
                      <td className="p-4 font-medium">{label}</td>
                      {values.map((value, i) => (
                        <td key={i} className="p-4 text-[#b8b8b8]">
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      <section className="bg-[#202020] px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-center text-3xl font-semibold">
            Frequently asked questions
          </h2>
          <div className="divide-y divide-slate-200">
            {faqs.map((faq, index) => (
              <div key={faq.q}>
                <button
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left font-semibold"
                >
                  {faq.q}
                  {openFaq === index ? (
                    <ChevronUp className="shrink-0" />
                  ) : (
                    <ChevronDown className="shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <p className="pb-5 leading-7 text-[#b8b8b8]">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
