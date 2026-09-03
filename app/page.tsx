import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { CtaBand, StatsBand } from "@/components/sections";
import { HomeHero } from "@/components/home-hero";
import { SolutionsCarousel } from "@/components/solutions-carousel";
import { ReviewsSection } from "@/components/reviews-section";
import { projects } from "@/data/site";

export default function Home() {
  const featured = projects[0];

  return (
    <main>
      <HomeHero />

      <section className="section-pad">
        <div className="container editorial-grid">
          <div className="col-span-12 lg:col-span-5">
            <p className="eyebrow">Company Introduction</p>
            <h2 className="section-title mt-4">Solar delivery shaped by engineering discipline.</h2>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <p className="body-large">
              HelioWorks works with homeowners, business owners, and industrial teams who want solar to be clear, practical, and durable. We study the site, model the load, plan approvals, and build systems that can be serviced years after commissioning.
            </p>
            <Link href="/about" className="button-link group mt-8 text-primary">
              Know Our Story <ArrowRight size={17} className="button-arrow" />
            </Link>
          </div>
        </div>
      </section>

      <StatsBand />

      <section className="section-pad bg-[#efede4]">
        <div className="container">
          <div className="editorial-grid mb-16">
            <div className="col-span-12 lg:col-span-7">
              <p className="eyebrow">Solar Solutions</p>
              <h2 className="section-title mt-4">Systems for homes, businesses, factories, and long-life assets.</h2>
            </div>
            <p className="body-large col-span-12 lg:col-span-4 lg:col-start-9">
              Every proposal is shaped around available space, electrical demand, tariff structure, installation access, and future maintenance.
            </p>
          </div>
          <div className="w-[100vw] relative left-1/2 -translate-x-1/2 overflow-hidden sm:w-auto sm:static sm:left-auto sm:translate-x-0 sm:overflow-visible mt-8">
            <SolutionsCarousel />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container editorial-grid items-end">
          <div className="col-span-12 lg:col-span-5">
            <p className="eyebrow">Featured Project</p>
            <h2 className="section-title mt-4">{featured.title}</h2>
            <p className="body-large mt-6">{featured.summary}</p>
            <Link href={`/projects/${featured.slug}`} className="button-primary group mt-8">
              View Project <ArrowRight size={17} className="button-arrow" />
            </Link>
          </div>
          <div className="relative col-span-12 min-h-[520px] overflow-hidden lg:col-span-7">
            <Image src={featured.image} alt={featured.title} fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 grid bg-white text-primary sm:right-auto sm:grid-cols-3">
              <div className="border-b border-border p-5 sm:border-b-0 sm:border-r">
                <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Capacity</p>
                <p className="mt-1 text-2xl font-semibold">{featured.capacity}</p>
              </div>
              <div className="border-b border-border p-5 sm:border-b-0 sm:border-r">
                <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Region</p>
                <p className="mt-1 text-2xl font-semibold">{featured.location}</p>
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Type</p>
                <p className="mt-1 text-2xl font-semibold">{featured.type}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />

      <ReviewsSection />

      <section className="section-pad">
        <div className="container editorial-grid items-center">
          <div className="col-span-12 lg:col-span-6">
            <p className="eyebrow">Final CTA</p>
            <h2 className="section-title mt-4">Ready to make solar feel straightforward?</h2>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8">
            <p className="body-large">
              Share your location, monthly energy spend, and available roof or land area. We will help you understand the project path before you commit.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row">
              <Link href="/contact" className="button-primary group">
                Get a Free Quote <ArrowRight size={17} className="button-arrow" />
              </Link>
              <Link href="/solutions" className="button-secondary group">
                Explore Solutions <ArrowRight size={17} className="button-arrow" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
