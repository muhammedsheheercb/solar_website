"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";

const processCards = [
  {
    title: "Free Consultation",
    description:
      "Our experts assess your home or business energy needs, location, and budget to design a solar plan tailored just for you.",
    tags: ["Expert Guidance", "Energy Audit"],
    darkBg: false,
    baseBg: "#ffffff",
    activeBg: "#fbfaf4",
    textColor: "#0d3b2e",
  },
  {
    title: "Custom Design",
    description:
      "We create a smart solar system layout that maximizes efficiency and blends seamlessly with your property.",
    tags: ["Smart Layout", "High Efficiency"],
    darkBg: true,
    baseBg: "#1c1c1a",
    activeBg: "#292825",
    textColor: "#ffffff",
  },
  {
    title: "Professional Setup",
    description:
      "Certified technicians install your solar panels with high precision, ensuring top-quality performance and safety.",
    tags: ["Hassle-Free Setup", "Safety First"],
    darkBg: false,
    baseBg: "#ffffff",
    activeBg: "#fbfaf4",
    textColor: "#0d3b2e",
  },
  {
    title: "Lifecycle Care",
    description:
      "Continuous monitoring, performance audits, and remote maintenance support keep your solar asset operating at peak yield.",
    tags: ["24/7 Monitoring", "Asset Warranty"],
    darkBg: true,
    baseBg: "#1c1c1a",
    activeBg: "#292825",
    textColor: "#ffffff",
  },
];

export function ReviewsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Delayed start range: [0, 0.15] keeps Card 1 stationary so user reads full text on mobile & desktop before track begins sliding left
  const trackX = useTransform(scrollYProgress, [0.15, 1], ["0%", "-75%"]);

  return (
    <section ref={containerRef} className="relative h-[280vh] bg-[#eae5d9]/60 py-10 md:py-16">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
        
        {/* Section Header */}
        <div className="container mb-6 md:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6">
          <div>
            <p className="eyebrow text-accent-strong">Client Perspective</p>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-medium text-primary mt-2 leading-tight tracking-tight">
              Simple Process.<br />Maximum Efficiency.
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              We make switching to solar easy with a clear, hassle-free process designed to save you time, money, and energy.
            </p>
            <p className="mt-2 md:mt-4 font-bold text-xs md:text-sm text-primary tracking-wide flex items-center gap-2">
              Keep Scrolling to Explore &gt;&gt;
            </p>
          </div>
        </div>

        {/* Full View Mobile Deck Reel */}
        <div className="w-full overflow-hidden px-4 md:px-0">
          <div className="container px-0 md:px-4">
            <motion.div style={{ x: trackX }} className="flex gap-4 md:gap-6 w-max">
              {processCards.map((card, idx) => (
                <FullViewCardItem
                  key={idx}
                  card={card}
                  index={idx}
                  total={processCards.length}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}

function FullViewCardItem({
  card,
  index,
  total,
  scrollYProgress,
}: {
  card: (typeof processCards)[0];
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const step = 0.85 / (total - 1);
  const cardStart = 0.15 + (index - 1) * step;
  const cardEnd = 0.15 + index * step;

  // Smooth slide-in from right for index > 0 after Card 1 rest duration
  const slideInX = useTransform(
    scrollYProgress,
    [cardStart, cardEnd],
    index === 0 ? ["0px", "0px"] : ["140px", "0px"]
  );

  // Bottom-to-top background fill animation (0% to 100%)
  const fillHeight = useTransform(
    scrollYProgress,
    [cardStart, cardEnd],
    index === 0 ? ["100%", "100%"] : ["0%", "100%"]
  );

  return (
    <motion.div
      style={{ x: slideInX }}
      className="relative w-[calc(100vw-2rem)] sm:w-[360px] md:w-[420px] h-[340px] sm:h-[360px] md:h-[380px] rounded-sm p-6 sm:p-8 md:p-10 flex flex-col justify-between overflow-hidden shadow-sm border border-black/10 transition-shadow hover:shadow-md shrink-0"
    >
      {/* Base Background Color */}
      <div
        className="absolute inset-0 z-0"
        style={{ backgroundColor: card.baseBg }}
      />

      {/* Bottom-to-Top Background Fill Overlay */}
      <motion.div
        style={{ height: fillHeight, backgroundColor: card.activeBg }}
        className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none"
      />

      {/* Card Title Header */}
      <div className="relative z-10">
        <h3
          className="font-display text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight"
          style={{ color: card.textColor }}
        >
          {card.title}
        </h3>
      </div>

      {/* Card Content & Tags */}
      <div className="relative z-10 space-y-4 sm:space-y-6">
        <p
          className="text-xs sm:text-sm md:text-base leading-relaxed font-normal opacity-90"
          style={{ color: card.textColor }}
        >
          {card.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {card.tags.map((tag, tIdx) => (
            <span
              key={tIdx}
              className={`px-3 py-1 sm:py-1.5 text-[11px] sm:text-xs font-semibold rounded-full border ${
                card.darkBg
                  ? "border-white/20 text-white/90"
                  : "border-primary/20 text-primary"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
