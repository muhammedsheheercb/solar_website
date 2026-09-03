import Link from "next/link";

export default function SitemapPage() {
  const pages = ["/", "/about", "/solutions", "/projects", "/services", "/solar-calculator", "/blog", "/contact", "/careers", "/faq", "/privacy-policy", "/terms"];
  return <main className="container py-40"><p className="eyebrow">Sitemap</p><h1 className="section-title mt-4">All pages</h1><div className="mt-10 grid gap-3">{pages.map((page) => <Link className="font-bold text-primary" key={page} href={page}>{page}</Link>)}</div></main>;
}
