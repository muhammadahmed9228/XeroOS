import { Link } from "react-router-dom";
import { ArrowUpRight, Menu } from "lucide-react";

const APP_URL = "https://app.xeroos.com/";
const QUOTE_URL = "https://9xero.com/free-quote";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#373737] bg-[#1b1b1b]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="XeroOS home">
          <img
            src="/xeroos-logo.svg"
            alt="XeroOS logo"
            className="size-10 rounded-xl"
          />
          <span className="text-xl font-bold tracking-tight text-white">
            Xero<span className="text-[#ffd400]">OS</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="/#platform" className="text-sm font-medium text-[#b8b8b8] hover:text-[#ffd400]">Platform</a>
          <a href="/#solutions" className="text-sm font-medium text-[#b8b8b8] hover:text-[#ffd400]">Solutions</a>
          <a href="/#how-it-works" className="text-sm font-medium text-[#b8b8b8] hover:text-[#ffd400]">How it works</a>
          <Link to="/pricing" className="text-sm font-medium text-[#b8b8b8] hover:text-[#ffd400]">Pricing</Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={APP_URL}
            className="hidden rounded-full px-4 py-2.5 text-sm font-semibold text-[#d0d0d0] transition hover:bg-[#292929] sm:inline-flex"
          >
            Sign in
          </a>
          <a
            href={QUOTE_URL}
            className="inline-flex items-center gap-2 rounded-full bg-[#2a2828] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#3a3737]"
          >
            Get started <ArrowUpRight size={16} />
          </a>
          <a
            href={APP_URL}
            className="grid size-10 place-items-center rounded-xl border border-[#373737] text-[#d0d0d0] md:hidden"
            aria-label="Sign in to XeroOS"
          >
            <Menu size={20} />
          </a>
        </div>
      </div>
    </header>
  );
}
