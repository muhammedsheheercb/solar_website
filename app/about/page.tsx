import { PageHero, ProcessBand, StatsBand } from "@/components/sections";

export default function AboutPage() {
  return (
    <main>
      <PageHero eyebrow="About HelioWorks" title="Solar engineering with long-term accountability." text="We are a solar EPC and asset care company focused on dependable clean energy systems, transparent economics, and disciplined project delivery." image="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1600&q=80" />
      <section className="py-20"><StatsBand /></section>
      <section className="container grid gap-10 py-10 pb-24 lg:grid-cols-2">
        <h2 className="section-title">Built for clients who need certainty.</h2>
        <div className="body-large grid gap-6">
          <p>HelioWorks brings feasibility, engineering, procurement, installation, and monitoring together under one practical delivery model.</p>
          <p>Our teams focus on safe construction, accurate yield expectations, clear documentation, and serviceable assets that keep performing after commissioning.</p>
        </div>
      </section>
      <ProcessBand />
    </main>
  );
}
