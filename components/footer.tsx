import Link from "next/link";
import { ArrowUpRight, SunMedium } from "lucide-react";

export function Footer() {
  const links = [
    ["About", "/about"],
    ["Solutions", "/solutions"],
    ["Projects", "/projects"],
    ["Services", "/services"],
    ["Solar Calculator", "/solar-calculator"],
    ["Careers", "/careers"],
    ["FAQ", "/faq"]
  ];

  return (
    <footer className="bg-[#101816] text-white">
      <div className="container grid gap-10 py-16 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="mb-5 flex items-center gap-3 font-extrabold">
            <span className="grid size-11 place-items-center rounded-full bg-accent text-primary"><SunMedium size={22} /></span>
            HelioWorks Solar
          </div>
          <p className="max-w-md text-white/70">
            Engineered solar EPC, rooftop, maintenance, and advisory services for homes, businesses, and industrial energy users.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-extrabold uppercase tracking-[0.14em] text-accent">Company</h3>
          <div className="grid gap-3 text-white/75">
            {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-extrabold uppercase tracking-[0.14em] text-accent">Start a project</h3>
          <p className="mb-5 text-white/70">Share your site details and monthly energy spend. Our engineering team will review the opportunity.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 font-extrabold text-accent">Talk to an expert <ArrowUpRight size={18} /></Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-3 py-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© 2026 HelioWorks Solar. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
