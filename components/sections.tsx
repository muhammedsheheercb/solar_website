import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { projects, services, solutions, stats } from "@/data/site";

export function PageHero({ eyebrow, title, text, image }: { eyebrow: string; title: string; text: string; image?: string }) {
  return (
    <section className="relative overflow-hidden bg-primary pt-36 text-white">
      {image && <Image src={image} alt="" fill priority className="object-cover opacity-30" />}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,59,46,.94),rgba(13,59,46,.62))]" />
      <div className="container relative z-10 grid min-h-[430px] content-center gap-6 pb-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="section-title max-w-4xl text-balance">{title}</h1>
        <p className="body-large max-w-2xl text-white/78">{text}</p>
      </div>
    </section>
  );
}

export function StatsBand() {
  return (
    <section>
      <div className="container grid border-y border-border md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="border-border py-8 md:border-r md:px-8 md:last:border-r-0">
            <p className="font-sans text-4xl font-semibold tracking-[-0.02em] text-primary">{stat.value}</p>
            <p className="mt-3 text-[0.8rem] font-bold uppercase tracking-[0.12em] text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SolutionsGrid() {
  return (
    <div className="editorial-grid">
      {solutions.map((item, index) => {
        const Icon = item.icon;
        return (
          <Link key={item.slug} href={`/solutions/${item.slug}`} className={index < 2 ? "group col-span-12 border-t border-border pt-6 md:col-span-6" : "group col-span-12 border-t border-border pt-6 md:col-span-4"}>
            <div className={index < 2 ? "relative h-80 overflow-hidden" : "relative h-52 overflow-hidden"}>
              <Image src={item.image} alt={item.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-5 py-6">
              <Icon className="mt-1 text-accent-strong" size={24} />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.13em] text-muted-foreground">{item.label}</p>
                <h3 className="mt-2 text-2xl font-semibold text-primary">{item.title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{item.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 font-bold text-primary">Explore <ArrowRight size={17} className="button-arrow" /></span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export function ServicesGrid() {
  return (
    <div className="grid gap-px border-y border-border bg-border md:grid-cols-2 lg:grid-cols-4">
      {services.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.title} className="bg-background p-7 lg:min-h-[280px]">
            <Icon className="text-accent-strong" size={30} />
            <h3 className="mt-12 text-xl font-semibold text-primary">{item.title}</h3>
            <p className="mt-3 leading-7 text-muted-foreground">{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export function ProjectGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {projects.map((project) => (
        <Link key={project.slug} href={`/projects/${project.slug}`} className="group">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src={project.image} alt={project.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
          </div>
          <div className="border-b border-border py-6">
            <div className="mb-4 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
              <span>{project.capacity}</span>
              <span>/</span>
              <span>{project.location}</span>
            </div>
            <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
            <p className="mt-3 leading-7 text-muted-foreground">{project.summary}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function ProcessBand() {
  const steps = ["Discovery audit", "Engineering design", "Approvals & procurement", "Installation", "Monitoring & care"];
  return (
    <section className="bg-primary section-pad text-white">
      <div className="container">
        <p className="eyebrow">Our Method</p>
        <h2 className="section-title mt-4 max-w-3xl">Disciplined delivery from site survey to lifecycle performance.</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-5">
          {steps.map((step, index) => (
          <div key={step} className="border-t border-white/20 pt-5">
              <p className="text-sm font-bold text-accent">0{index + 1}</p>
              <p className="mt-10 text-lg font-semibold">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="relative isolate bg-[#e9e2d2] py-20 text-primary">
      <div className="container grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div className="max-w-3xl">
          <p className="eyebrow text-accent-strong">Plan with confidence</p>
          <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,4.8rem)] font-medium leading-none">
            Estimate your solar savings before the first site visit.
          </h2>
          <p className="body-large mt-5 max-w-2xl">
            Use the planning calculator to frame system size, usable roof area, and potential annual savings before our engineers validate the numbers.
          </p>
        </div>
        <Link href="/solar-calculator" className="button-primary group w-fit">
          Calculate Your Savings <ArrowRight size={17} className="button-arrow" />
        </Link>
      </div>
    </section>
  );
}

export function BenefitsList() {
  return (
    <div className="grid gap-4">
      {["Utility bill reduction", "Lower operational emissions", "Predictable long-term energy costs", "Engineer-led safety and quality checks"].map((item) => (
        <div key={item} className="flex items-center gap-3">
          <CheckCircle2 className="shrink-0 text-accent-strong" size={22} />
          <span className="font-bold text-primary">{item}</span>
        </div>
      ))}
    </div>
  );
}
