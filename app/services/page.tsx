import { CtaBand, PageHero, ProcessBand, ServicesGrid } from "@/components/sections";

export default function ServicesPage() {
  return (
    <main>
      <PageHero eyebrow="Services" title="From feasibility to lifetime performance." text="A complete engineering, procurement, construction, monitoring, and maintenance service model for solar assets." image="https://images.unsplash.com/photo-1548613053-22087dd8edb8?auto=format&fit=crop&w=1600&q=80" />
      <section className="container py-24"><ServicesGrid /></section>
      <ProcessBand />
      <CtaBand />
    </main>
  );
}
