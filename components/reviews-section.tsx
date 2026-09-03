"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Quote } from "lucide-react";

const reviews = [
  {
    quote:
      "The team made the project feel controlled from the first survey. The numbers were clear, the site work was tidy, and the handover documentation gave our facilities team real confidence.",
    author: "Operations Head, industrial manufacturing client",
    bg: "#151a17",
    color: "white",
  },
  {
    quote:
      "HelioWorks delivered on every promise. The transition to solar was completely seamless, and we are already seeing a 40% reduction in our monthly energy expenditure.",
    author: "Facility Manager, logistics center",
    bg: "#e9e2d2",
    color: "#0d3b2e", // primary color
  },
];

export function ReviewsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Card 1 animations (moves left and fades/scales down)
  const card1X = useTransform(scrollYProgress, [0, 0.5], ["0%", "-30%"]);
  const card1Opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const card1Scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  // Card 2 animations (comes from bottom)
  const card2Y = useTransform(scrollYProgress, [0, 0.5], ["100%", "0%"]);

  return (
    <div ref={containerRef} className="relative h-[200vh] bg-background">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        
        {/* Card 1 with its own background */}
        <motion.div
          className="absolute inset-0 flex items-center"
          style={{ 
            x: card1X, 
            opacity: card1Opacity, 
            scale: card1Scale,
            backgroundColor: reviews[0].bg,
            color: reviews[0].color
          }}
        >
          <div className="container relative h-full w-full flex items-center">
            <div className="editorial-grid w-full">
              <div className="col-span-12 lg:col-span-4">
                <p className="eyebrow text-accent">Client Perspective</p>
                <h2 className="section-title mt-4">A calmer way to make a solar decision.</h2>
              </div>
              <div className="col-span-12 lg:col-span-7 lg:col-start-6">
                <Quote className="text-accent" size={34} />
                <p className="mt-8 font-display text-[clamp(2rem,4vw,4rem)] font-medium leading-tight">
                  “{reviews[0].quote}”
                </p>
                <p className="mt-8 font-semibold opacity-70">{reviews[0].author}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 2 with its own background, sliding up from bottom */}
        <motion.div
          className="absolute inset-0 flex items-center shadow-[0_-20px_50px_rgba(0,0,0,0.1)]"
          style={{ 
            y: card2Y,
            backgroundColor: reviews[1].bg,
            color: reviews[1].color
          }}
        >
          <div className="container relative h-full w-full flex items-center">
            <div className="editorial-grid w-full">
              <div className="col-span-12 lg:col-span-4">
                <p className="eyebrow text-accent-strong">Client Perspective</p>
                <h2 className="section-title mt-4">Measurable impact from day one.</h2>
              </div>
              <div className="col-span-12 lg:col-span-7 lg:col-start-6">
                <Quote className="text-accent-strong" size={34} />
                <p className="mt-8 font-display text-[clamp(2rem,4vw,4rem)] font-medium leading-tight">
                  “{reviews[1].quote}”
                </p>
                <p className="mt-8 font-semibold opacity-70">{reviews[1].author}</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
