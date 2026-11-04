import {
  ArrowUpRight,
  Camera,
  Globe,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";

const products = [
  {
    name: "XeroPilot",
    description:
      "AI-powered conversations and follow-ups across your customer channels.",
    tags: ["Web", "WhatsApp", "Instagram", "Email"],
    icon: MessageCircle,
  },
  {
    name: "Voice AI",
    description:
      "Connect sales conversations with automated calling and lead follow-up.",
    tags: ["Inbound calls", "Outbound calls"],
    icon: Phone,
  },
];

const channels = [
  { name: "Web", icon: Globe },
  { name: "WhatsApp", icon: MessageCircle },
  { name: "Instagram", icon: Camera },
  { name: "Email", icon: Mail },
];

export default function Integrations() {
  return (
    <section
      id="integrations"
      className="relative overflow-hidden bg-[#1b1b1b] px-5 py-24 text-white lg:px-8"
    >
      <div className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-[#ffd400]/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#ffd400]">
            Connected workflows
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Your conversations. <span className="text-[#ffd400]">One sales system.</span>
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#d0d0d0]">
            Bring customer conversations and follow-ups into your XeroOS workflow
            with 9Xero&apos;s connected products.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {products.map(({ name, description, tags, icon: Icon }) => (
            <article
              key={name}
              className="rounded-2xl border border-[#373737] bg-[#242424] p-8 transition hover:border-[#ffd400]/50"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-[#ffd400]/10 text-[#ffd400]">
                <Icon size={24} />
              </div>
              <h3 className="mt-6 text-2xl font-bold">{name}</h3>
              <p className="mt-3 max-w-lg leading-7 text-[#d0d0d0]">{description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-[#f7f7f7]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3 rounded-2xl border border-[#373737] bg-[#242424] p-5">
          <span className="mr-2 text-sm font-semibold text-[#d0d0d0]">
            Supported XeroPilot channels
          </span>
          {channels.map(({ name, icon: Icon }) => (
            <span
              key={name}
              className="inline-flex items-center gap-2 rounded-full bg-[#2b2b2b] px-3 py-2 text-sm text-[#f7f7f7]"
            >
              <Icon size={15} /> {name}
            </span>
          ))}
        </div>

        <a
          href="https://9xero.com/"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#ffd400] hover:text-[#eac300]"
        >
          Explore the 9Xero suite <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
