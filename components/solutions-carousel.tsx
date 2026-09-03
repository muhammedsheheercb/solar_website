"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { solutions } from "@/data/site";

export function SolutionsCarousel() {
  const [activeIndex, setActiveIndex] = useState(2);

  const toPrev = () => {
    setActiveIndex(prev => Math.max(0, prev - 1));
  };

  const toNext = () => {
    setActiveIndex(prev => Math.min(solutions.length - 1, prev + 1));
  };

  const toSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative text-neutral-800 select-none overflow-hidden py-12">
      {/* carousel wrapper */}
      <div className="w-[300px] md:w-[440px] mx-auto">
        {/* slides container */}
        <motion.div 
          className="flex w-fit" 
          animate={{ x: `-${(activeIndex * 100) / solutions.length}%` }}
          transition={{ type: 'spring', bounce: 0.2, duration: 0.8 }}
        >
          {solutions.map((item, i) => {
            const isActive = activeIndex === i;
            const Icon = item.icon;
            
            return (
              <div className="[perspective:1200px]" key={i}>
                <motion.div 
                  className="w-[300px] md:w-[440px] aspect-[3/4] flex flex-col gap-4 will-change-[transform,scale]"
                  animate={{ rotateY: (activeIndex - i) * 45, scale: isActive ? 1 : 0.85 }}
                  transition={{ type: 'spring', bounce: 0.1, duration: 1 }}
                >
                  <div 
                    className="relative w-full h-full rounded-3xl overflow-hidden cursor-pointer group shadow-2xl"
                    onClick={() => toSlide(i)}
                  >
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      fill 
                      sizes="(min-width: 768px) 440px, 300px"
                      className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500" />
                    
                    <motion.div 
                      className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end text-white will-change-[opacity,filter]" 
                      animate={{ filter: isActive ? 'blur(0)' : 'blur(4px)', opacity: isActive ? 1 : 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="mb-auto">
                        <Icon className="text-accent" size={40} strokeWidth={1.5} />
                      </div>
                      <p className="text-xs font-bold uppercase tracking-[0.13em] text-accent mb-3">{item.label}</p>
                      <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-balance leading-tight">{item.title}</h3>
                      <p className="text-sm md:text-base text-white/80 leading-relaxed mb-8">{item.description}</p>
                      
                      <Link 
                        href={`/solutions/${item.slug}`} 
                        className="inline-flex items-center gap-3 font-bold text-white group/link w-fit tracking-wide"
                      >
                        Explore Solution <ArrowRight size={18} className="transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* controls */}
      <div className="mt-16 w-fit px-3 mx-auto flex items-center gap-6 justify-center text-primary rounded-full bg-white/50 backdrop-blur-md border border-primary/10 shadow-sm p-2">
        <button 
          onClick={toPrev} 
          className="p-3 cursor-pointer hover:bg-primary/10 rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed" 
          disabled={activeIndex === 0}
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="flex justify-center items-center gap-3 px-2">
          {solutions.map((_, i) => (
            <button 
              key={i} 
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => toSlide(i)}
              className={`rounded-full cursor-pointer h-2 transition-[width,background-color] duration-500 ${activeIndex === i ? 'w-10 bg-primary' : 'w-2 bg-primary/20 hover:bg-primary/40'}`}
            />
          ))}
        </div>
        <button 
          onClick={toNext} 
          className="p-3 cursor-pointer hover:bg-primary/10 rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed" 
          disabled={activeIndex === solutions.length - 1}
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
