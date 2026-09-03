import { PageHero } from "@/components/sections";

export default function CareersPage() {
  const roles = ["Solar Project Engineer", "Site Safety Supervisor", "Business Development Manager"];
  return (
    <main>
      <PageHero eyebrow="Careers" title="Build practical clean energy systems with us." text="Join a team that values field reality, engineering discipline, and client trust." image="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1600&q=80" />
      <section className="container grid gap-5 py-24">
        {roles.map((role) => <div key={role} className="soft-card flex flex-col gap-3 p-6 md:flex-row md:items-center md:justify-between"><div><h2 className="text-2xl font-black text-primary">{role}</h2><p className="mt-2 text-muted-foreground">Full time / India / Solar delivery</p></div><button className="button-primary w-fit">Apply</button></div>)}
      </section>
    </main>
  );
}
