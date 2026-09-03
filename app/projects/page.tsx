import { CtaBand, PageHero, ProjectGrid } from "@/components/sections";

export default function ProjectsPage() {
  return (
    <main>
      <PageHero eyebrow="Solar Projects" title="Proof in installed capacity, uptime, and savings." text="A representative portfolio of residential, commercial, and industrial solar deployments." image="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&w=1600&q=80" />
      <section className="container py-24"><ProjectGrid /></section>
      <CtaBand />
    </main>
  );
}
