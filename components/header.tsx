"use client";

import Link from "next/link";
import { Menu, X, ChevronDown, SunMedium, ArrowRight, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { solutions } from "@/data/site";
import { cn } from "@/lib/utils";

const nav = [
  ["Projects", "/projects"],
  ["Services", "/services"],
  ["About", "/about"],
  ["Insights", "/blog"]
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) closeButtonRef.current?.focus();
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled ? "bg-[#fbfaf4]/94 shadow-sm ring-1 ring-border/80 backdrop-blur h-[70px]" : "h-[88px] bg-[#081c17]/28")}>
      <div className="container flex h-full items-center justify-between">
        <Link href="/" className={cn("flex min-w-0 items-center gap-3 font-extrabold", scrolled ? "text-primary" : "text-white")}>
          <span className="grid size-10 shrink-0 place-items-center bg-accent text-primary">
            <SunMedium size={22} />
          </span>
          <span className={cn("block max-w-[10rem] truncate text-[0.95rem] tracking-[0.03em] sm:text-[1.05rem]", scrolled ? "text-primary" : "text-white")}>HELIOWORKS</span>
        </Link>

        <nav className={cn("hidden items-center gap-9 text-[0.92rem] font-semibold lg:flex", scrolled ? "text-foreground" : "text-white")}>
          <div className="group relative py-7">
            <Link href="/solutions" className="flex items-center gap-1">
              Solutions <ChevronDown size={16} />
            </Link>
            <div className="invisible absolute left-1/2 top-[68px] w-[620px] -translate-x-1/2 translate-y-2 border border-border bg-[#fbfaf4] p-5 text-foreground opacity-0 shadow-2xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-accent-strong">Solar solutions</p>
              <div className="grid grid-cols-2 gap-2">
                {solutions.map((item) => (
                  <Link key={item.slug} href={`/solutions/${item.slug}`} className="p-4 transition hover:bg-white">
                    <span className="mt-1 block text-base font-extrabold text-primary">{item.title}</span>
                    <span className="mt-1 block text-sm font-medium leading-6 text-muted-foreground">{item.label === "Care" ? "Monitoring and maintenance" : item.description}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {nav.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>

        <div className={cn("hidden items-center gap-6 text-sm font-bold lg:flex", scrolled ? "text-foreground" : "text-white")}>
          <Link href="/contact">Contact</Link>
          <Link href="/contact" className={cn("button-primary", !scrolled && "bg-white text-primary")}>Get a Quote <ArrowRight size={16} /></Link>
        </div>

        <button aria-label="Open menu" className={cn("grid size-11 place-items-center border lg:hidden", scrolled ? "border-border bg-white text-primary" : "border-white/40 text-white")} onClick={() => setOpen(true)}>
          <Menu size={22} />
        </button>
      </div>

      <div className={cn("fixed inset-0 z-50 transition lg:hidden", open ? "pointer-events-auto" : "pointer-events-none")}>
        <button aria-label="Close menu overlay" className={cn("absolute inset-0 bg-black/35 transition-opacity", open ? "opacity-100" : "opacity-0")} onClick={() => setOpen(false)} />
        <aside role="dialog" aria-modal="true" aria-hidden={!open} aria-label="Main navigation" className={cn("absolute right-0 top-0 h-full w-[90vw] max-w-[420px] bg-[#fbfaf4] text-foreground transition duration-300", open ? "visible translate-x-0" : "invisible translate-x-full")}>
          <div className="flex h-full flex-col">
            <div className="flex h-20 items-center justify-between border-b border-border px-6">
              <Link href="/" className="flex min-w-0 items-center gap-3 font-extrabold text-primary" onClick={() => setOpen(false)}>
                <span className="grid size-10 shrink-0 place-items-center bg-accent text-primary"><SunMedium size={22} /></span>
                <span className="truncate">HELIOWORKS</span>
              </Link>
              <button ref={closeButtonRef} aria-label="Close menu" className="grid size-10 place-items-center border border-border text-primary focus:outline-none focus:ring-2 focus:ring-primary/30" onClick={() => setOpen(false)}>
                <X size={21} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-8">
              <button aria-expanded={solutionsOpen} className="flex w-full items-center justify-between py-4 text-left text-2xl font-semibold focus:outline-none focus:ring-2 focus:ring-primary/20" onClick={() => setSolutionsOpen((value) => !value)}>
                Solutions <ChevronDown className={cn("transition", solutionsOpen && "rotate-180")} />
              </button>
              <div className={cn("grid overflow-hidden border-l border-border pl-5 transition-all", solutionsOpen ? "max-h-[520px] pb-4" : "max-h-0")}>
                {solutions.map((item) => (
                  <Link key={item.slug} onClick={() => setOpen(false)} href={`/solutions/${item.slug}`} className="py-3">
                    <span className="block font-bold text-primary">{item.title}</span>
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                  </Link>
                ))}
              </div>
              {nav.map(([label, href]) => (
                <Link key={href} onClick={() => setOpen(false)} className="block border-t border-border py-5 text-2xl font-semibold" href={href}>{label}</Link>
              ))}
              <Link onClick={() => setOpen(false)} className="block border-t border-border py-5 text-2xl font-semibold" href="/contact">Contact</Link>
            </div>
            <div className="border-t border-border p-6">
              <p className="mb-2 flex items-center gap-2 text-sm font-bold text-primary"><Phone size={16} /> +91 98765 43210</p>
              <p className="mb-5 text-sm text-muted-foreground">hello@helioworks.example</p>
              <Link href="/contact" onClick={() => setOpen(false)} className="button-primary w-full">Get a Quote <ArrowRight size={16} /></Link>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}
