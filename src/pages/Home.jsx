import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Workflow,
  Users,
  MessageSquare,
  BrainCircuit,
  ChartNoAxesCombined,
  Zap,
  Building2,
  ShoppingCart,
  BriefcaseBusiness,
  HeartPulse,
  GraduationCap,
  Factory,
} from "lucide-react";
import PackageSelector from "../features/calculators/PackageSelector";
import SavingsCalculator from "../features/calculators/SavingsCalculator";
import Integrations from "../components/sections/Integrations";

const products = [
  {
    icon: Users,
    title: "CRM that keeps everyone aligned",
    text: "Keep contacts, deals, activities and customer history in one organized workspace.",
  },
  {
    icon: MessageSquare,
    title: "Conversations in context",
    text: "Bring customer conversations closer to the leads and opportunities they belong to.",
  },
  {
    icon: Workflow,
    title: "Automation that moves work forward",
    text: "Create consistent follow-ups and reduce repetitive sales administration.",
  },
  {
    icon: BrainCircuit,
    title: "AI built into your workflow",
    text: "Bring AI into your sales process to help your team work more efficiently.",
  },
];

const industries = [
  { icon: Building2, name: "Professional Services" },
  { icon: ShoppingCart, name: "Retail & E-commerce" },
  { icon: BriefcaseBusiness, name: "Real Estate" },
  { icon: HeartPulse, name: "Healthcare" },
  { icon: GraduationCap, name: "Education" },
  { icon: Factory, name: "B2B & Manufacturing" },
];

const steps = [
  ["Capture", "Bring enquiries into a shared sales workspace."],
  ["Organize", "Track leads, contacts and opportunities."],
  ["Automate", "Set up follow-ups and repeatable workflows."],
  ["Grow", "Use clear visibility to improve your sales process."],
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#ffd400]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-8 text-[#b8b8b8]">{description}</p>
      )}
    </div>
  );
}

function DashboardPreview() {
  return (
    <div className="rounded-3xl border border-[#373737] bg-[#1b1b1b] p-4 shadow-2xl shadow-black/20 sm:p-7">
      <div className="flex items-center justify-between border-b border-[#373737] pb-5">
        <div>
          <p className="text-sm text-[#b8b8b8]">Workspace / Sales</p>
          <h3 className="mt-1 text-xl font-semibold">Sales overview</h3>
        </div>
        <span className="rounded-full bg-[#ffd400]/10 px-3 py-1.5 text-xs font-semibold text-[#ffd400]">
          Preview
        </span>
      </div>
      <div className="grid gap-4 py-5 sm:grid-cols-3">
        {[
          ["Open opportunities", "128"],
          ["Pipeline value", "$84,250"],
          ["Follow-ups due", "16"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl bg-[#202020] p-4">
            <p className="text-sm text-[#b8b8b8]">{label}</p>
            <p className="mt-2 text-2xl font-bold text-white">{value}</p>
          </div>
        ))}
      </div>
      <div className="space-y-3">
        {[
          ["Website enquiry", "New lead", "bg-[#ffd400]"],
          ["Partnership request", "Contacted", "bg-[#2b2b2b]"],
          ["Service consultation", "Qualified", "bg-[#2b2b2b]"],
        ].map(([name, status, color]) => (
          <div
            key={name}
            className="flex items-center justify-between rounded-xl border border-[#373737] p-4"
          >
            <div className="flex items-center gap-3">
              <span className={`h-2.5 w-2.5 rounded-full ${color}`} />
              <span className="text-sm font-medium">{name}</span>
            </div>
            <span className="text-xs text-[#b8b8b8]">{status}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-[#b8b8b8]">
        Illustrative interface preview. Not live product data.
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#202020]">
        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#ffd400]/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#373737] bg-[#1b1b1b] px-4 py-2 text-sm font-medium text-[#ffd400]">
              <Zap size={15} /> A clearer way to sell
            </div>
            <h1 className="text-5xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl">
              Your Leads.
              <br />
              Your Team.
              <br />
              <span className="text-[#ffd400]">One System.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#b8b8b8]">
              Capture leads, automate sales, manage customer relationships, and
              grow your business with AI—all in one platform.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="https://9xero.com/free-quote"
                className="inline-flex items-center gap-2 rounded-full bg-[#2a2828] px-6 py-3.5 font-semibold text-white hover:bg-[#3a3737]"
              >
                Get Started <ArrowUpRight size={18} />
              </a>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 rounded-full border border-[#373737] bg-[#1b1b1b] px-6 py-3.5 font-semibold text-[#d0d0d0] hover:border-[#ffd400]/50"
              >
                View Pricing <ArrowRight size={18} />
              </Link>
            </div>
            <p className="mt-5 text-sm text-[#b8b8b8]">
              Built around the way your team sells.
            </p>
          </div>

          <DashboardPreview />
        </div>
      </section>

      <section id="platform" className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="One connected platform"
            title="Everything your sales team needs. In one place."
            description="Connect the essential parts of your sales process without adding unnecessary complexity."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-[#373737] p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 inline-flex rounded-xl bg-[#ffd400]/10 p-3 text-[#ffd400]">
                  <Icon size={23} />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#b8b8b8]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Integrations />

      <section className="bg-[#202020] px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#ffd400]">
              Clear visibility
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Know what’s happening across your pipeline.
            </h2>
            <p className="mt-5 leading-7 text-[#b8b8b8]">
              Keep your team focused with a shared view of leads, opportunities
              and next steps. Spend less time piecing together updates and more
              time moving conversations forward.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "Keep customer and deal information organized",
                "See follow-ups and next steps",
                "Give your team a shared view of sales activity",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-[#d0d0d0]">
                  <Check className="shrink-0 text-[#ffd400]" size={19} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <DashboardPreview />
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div className="rounded-3xl bg-[#1b1b1b] p-8 text-white sm:p-10">
            <div className="flex items-center justify-between">
              <Workflow className="text-[#ffd400]" size={30} />
              <span className="rounded-full bg-[#1b1b1b]/10 px-3 py-1 text-xs">
                Workflow preview
              </span>
            </div>
            <div className="mt-8 space-y-3">
              {[
                ["New enquiry received", "Trigger"],
                ["Assign lead to sales", "Action"],
                ["Schedule follow-up", "Action"],
              ].map(([title, type], index) => (
                <div key={title}>
                  <div className="flex items-center justify-between rounded-xl border border-white/10 bg-[#1b1b1b]/5 p-4">
                    <span className="text-sm font-medium">{title}</span>
                    <span className="text-xs text-[#b8b8b8]">{type}</span>
                  </div>
                  {index < 2 && (
                    <div className="ml-8 h-4 border-l border-[#ffd400]/50" />
                  )}
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs text-[#b8b8b8]">
              Illustrative workflow. Availability depends on plan and configuration.
            </p>
          </div>
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#ffd400]">
              Automation & AI
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Turn repetitive steps into consistent workflows.
            </h2>
            <p className="mt-5 leading-7 text-[#b8b8b8]">
              Create repeatable processes for lead handling and follow-up. Bring
              AI into your workflow where it supports your team's work.
            </p>
            <Link
              to="/pricing"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-[#ffd400] hover:text-[#eac300]"
            >
              Explore plans <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-[#242424] px-5 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="How it works"
            title="A practical path from enquiry to opportunity."
            description="Bring your sales process together in four steps."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([title, text], index) => (
              <div key={title} className="border-t border-white/30 pt-5">
                <span className="text-sm font-semibold text-[#d0d0d0]">
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#d0d0d0]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Solutions"
            title="Designed for teams with customers to serve."
            description="Adapt your sales workspace to the way your industry manages enquiries and relationships."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map(({ icon: Icon, name }) => (
              <div
                key={name}
                className="flex items-center gap-4 rounded-2xl border border-[#373737] p-5"
              >
                <span className="rounded-xl bg-[#292929] p-3 text-[#ffd400]">
                  <Icon size={22} />
                </span>
                <span className="font-semibold">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="calculators" className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-12">
          <PackageSelector />
          <SavingsCalculator />
        </div>
      </section>

      <section className="bg-[#202020] px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl bg-[#1b1b1b] px-7 py-12 text-center text-white sm:px-14">
          <ChartNoAxesCombined className="mx-auto mb-5 text-[#ffd400]" size={32} />
          <h2 className="text-3xl font-semibold tracking-tight">
            Bring your sales process into focus.
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-[#d0d0d0]">
            See how XeroOS can fit your team, workflows and customer
            conversations.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="https://9xero.com/free-quote"
              className="rounded-full bg-[#2a2828] px-6 py-3 font-semibold text-white hover:bg-[#3a3737]"
            >
              Request a Demo
            </a>
            <Link
              to="/pricing"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold hover:bg-[#1b1b1b]/10"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
