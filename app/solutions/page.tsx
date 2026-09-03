import { CtaBand, PageHero, SolutionsGrid } from "@/components/sections";

export default function SolutionsPage() {
  return (
    <main>
      <PageHero eyebrow="Solar Solutions" title="Solar systems shaped around real energy use." text="From homes to factories, we design solar projects around load profile, roof or land conditions, commercial returns, and operating reliability." image="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1600&q=80" />
      <section className="container py-24"><SolutionsGrid /></section>
      <CtaBand />
    </main>
  );
}
