import Link from "next/link";
import { PageHero } from "@/components/sections";
import { posts } from "@/data/site";

export default function BlogPage() {
  return (
    <main>
      <PageHero eyebrow="Insights" title="Practical thinking for solar decisions." text="Engineering, finance, and operations guidance for people planning long-life solar assets." image="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=80" />
      <section className="container grid gap-6 py-24 md:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="soft-card p-7">
            <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-accent-strong">{post.category} / {post.date}</p>
            <h2 className="mt-5 text-2xl font-black text-primary">{post.title}</h2>
            <p className="mt-4 leading-7 text-muted-foreground">{post.excerpt}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
