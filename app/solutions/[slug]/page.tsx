import { notFound } from "next/navigation";
import { CtaBand, PageHero, BenefitsList } from "@/components/sections";
import { solutions } from "@/data/site";

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export default async function SolutionDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = solutions.find((item) => item.slug === slug);
  if (!solution) notFound();

  return (
    <main>
      <PageHero eyebrow={solution.label} title={solution.title} text={solution.description} image={solution.image} />
      <section className="container grid gap-10 py-24 lg:grid-cols-[1fr_.8fr]">
        <div>
          <p className="eyebrow">What We Deliver</p>
          <h2 className="section-title mt-4">A precise solar plan, engineered for dependable savings.</h2>
          <p className="body-large mt-6">Our team reviews consumption, site constraints, safety requirements, electrical integration, approvals, and lifecycle service needs before proposing a system. The result is a practical project plan with clear performance expectations.</p>
        </div>
        <div className="soft-card p-8">
          <h3 className="mb-7 text-2xl font-black text-primary">Typical advantages</h3>
          <BenefitsList />
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
