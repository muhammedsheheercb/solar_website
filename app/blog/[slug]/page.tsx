import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections";
import { posts } from "@/data/site";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <main>
      <PageHero eyebrow={`${post.category} / ${post.date}`} title={post.title} text={post.excerpt} image="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=80" />
      <article className="container max-w-3xl py-24">
        <p className="body-large">This insight page is structured for long-form editorial content. Replace this placeholder with real analysis, diagrams, customer examples, and project economics when publishing production articles.</p>
        <p className="body-large mt-6">A strong solar article should make decision criteria clear: site constraints, expected generation, tariff assumptions, component quality, maintenance obligations, and payback sensitivity.</p>
      </article>
    </main>
  );
}
