import { PageHero } from "@/components/sections";

export default function ContactPage() {
  return (
    <main>
      <PageHero eyebrow="Contact" title="Let’s review your site and energy goals." text="Send your details and our solar advisory team will help shape the next step." image="https://images.unsplash.com/photo-1548613053-22087dd8edb8?auto=format&fit=crop&w=1600&q=80" />
      <section className="container grid gap-8 py-24 lg:grid-cols-[1fr_.8fr]">
        <form className="soft-card grid gap-5 p-8">
          {["Name", "Email", "Phone", "City", "Monthly electricity bill"].map((label) => (
            <label key={label} className="grid gap-2 font-bold text-primary">{label}<input className="rounded-md border border-border bg-white px-4 py-3 outline-none focus:border-primary" /></label>
          ))}
          <label className="grid gap-2 font-bold text-primary">Project notes<textarea className="min-h-32 rounded-md border border-border bg-white px-4 py-3 outline-none focus:border-primary" /></label>
          <button className="button-primary w-fit" type="button">Submit enquiry</button>
        </form>
        <div className="soft-card p-8">
          <p className="eyebrow">Head Office</p>
          <h2 className="mt-4 text-3xl font-black text-primary">HelioWorks Solar</h2>
          <p className="mt-5 leading-8 text-muted-foreground">12 Clean Energy Park, Bengaluru, Karnataka<br />hello@helioworks.example<br />+91 98765 43210</p>
        </div>
      </section>
    </main>
  );
}
