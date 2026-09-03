import { PageHero } from "@/components/sections";
import { faqs } from "@/data/site";

export default function FaqPage() {
  return (
    <main>
      <PageHero eyebrow="FAQ" title="Clear answers before you commit." text="Common questions about solar planning, approvals, installation, and maintenance." image="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1600&q=80" />
      <section className="container grid gap-5 py-24">
        {faqs.map(([q, a]) => <details key={q} className="soft-card p-6"><summary className="cursor-pointer text-xl font-black text-primary">{q}</summary><p className="mt-4 leading-7 text-muted-foreground">{a}</p></details>)}
      </section>
    </main>
  );
}
