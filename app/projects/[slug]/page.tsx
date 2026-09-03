import Image from "next/image";
import { notFound } from "next/navigation";
import { CtaBand, PageHero } from "@/components/sections";
import { projects } from "@/data/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main>
      <PageHero eyebrow={project.type} title={project.title} text={project.summary} image={project.image} />
      <section className="container grid gap-10 py-24 lg:grid-cols-[.8fr_1.2fr]">
        <div className="soft-card p-8">
          <dl className="grid gap-5">
            <div><dt className="text-sm font-extrabold uppercase tracking-[0.12em] text-muted-foreground">Capacity</dt><dd className="mt-1 text-2xl font-black text-primary">{project.capacity}</dd></div>
            <div><dt className="text-sm font-extrabold uppercase tracking-[0.12em] text-muted-foreground">Location</dt><dd className="mt-1 text-2xl font-black text-primary">{project.location}</dd></div>
            <div><dt className="text-sm font-extrabold uppercase tracking-[0.12em] text-muted-foreground">System type</dt><dd className="mt-1 text-2xl font-black text-primary">{project.type}</dd></div>
          </dl>
        </div>
        <div>
          <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-lg"><Image src={project.image} alt={project.title} fill className="object-cover" /></div>
          <h2 className="section-title">Designed for dependable output.</h2>
          <p className="body-large mt-6">This placeholder case study shows how the project page can present real constraints, chosen system architecture, implementation notes, and measured performance once project data is available.</p>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
