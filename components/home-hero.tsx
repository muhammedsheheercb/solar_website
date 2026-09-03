"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const heroImage =
  "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=2200&q=84";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
};

export function HomeHero() {
  return (
    <section className="relative min-h-[94svh] overflow-hidden bg-primary text-white">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={heroImage}
          alt="Modern building with rooftop solar panels"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,28,23,.90),rgba(8,28,23,.64)_48%,rgba(8,28,23,.20))]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/22 to-transparent" />

      <motion.div
        className="container relative z-10 grid min-h-[94svh] grid-cols-12 content-end gap-6 pb-14 pt-32 sm:pb-18 lg:pb-24"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1, delayChildren: 0.16 }}
      >
        <div className="col-span-12 max-w-4xl lg:col-span-8">
          <motion.p variants={fadeUp} className="eyebrow text-accent">
            Solar EPC / Rooftop / Asset Care
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-5 font-display text-[clamp(3.2rem,8vw,6.6rem)] font-medium leading-[0.94] text-balance"
          >
            Solar built for long-term energy confidence.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-2xl text-[clamp(1rem,1.3vw,1.18rem)] leading-8 text-white/80"
          >
            We design, install, and maintain high-performance solar systems for homes, commercial buildings, and industrial sites where reliability matters as much as savings.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <Link className="button-primary button-accent group" href="/contact">
              Get a Free Quote <ArrowRight size={17} className="button-arrow" />
            </Link>
            <Link className="button-link group text-white" href="/solutions">
              Explore Solutions <ArrowRight size={17} className="button-arrow" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          className="col-span-12 border-t border-white/28 pt-5 text-sm text-white/76 lg:col-span-3 lg:col-start-10"
        >
          <p className="font-semibold text-white">25+ years of project discipline</p>
          <p className="mt-2 leading-6">
            Feasibility, approvals, installation, monitoring, and service under one accountable solar team.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
