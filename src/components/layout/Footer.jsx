import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-[#373737] bg-[#1b1b1b] text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <Link to="/" className="flex items-center gap-3 text-2xl font-bold">
              <img src="/xeroos-logo.svg" alt="XeroOS logo" className="size-10 rounded-xl" />
              <span>Xero<span className="text-[#ffd400]">OS</span></span>
            </Link>
            <p className="mt-4 text-sm leading-6 text-[#b8b8b8]">
              Your Leads. Your Team. One System.
              <br />
              CRM, conversations, automation and AI built around the way you
              sell.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <h3 className="text-sm font-semibold">Explore</h3>
              <div className="mt-4 space-y-3 text-sm text-[#b8b8b8]">
                <Link className="block hover:text-white" to="/#platform">
                  Platform
                </Link>
                <Link className="block hover:text-white" to="/#solutions">
                  Solutions
                </Link>
                <Link className="block hover:text-white" to="/pricing">
                  Pricing
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Company</h3>
              <div className="mt-4 space-y-3 text-sm text-[#b8b8b8]">
                <a className="block hover:text-white" href="https://9xero.com">
                  9xero.com
                </a>
                <a className="block hover:text-white" href="mailto:hello@9xero.com">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[#373737] pt-6 text-xs text-[#b8b8b8]">
          © {new Date().getFullYear()} 9xero. XeroOS.
        </div>
      </div>
    </footer>
  );
}
