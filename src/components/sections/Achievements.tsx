"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioData } from "@/data/content";
import { FaTrophy, FaMedal, FaStar } from "react-icons/fa";

export default function Achievements() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!scrollWrapperRef.current || !containerRef.current) return;

      const items = gsap.utils.toArray('.achievement-card');
      
      gsap.to(items, {
        xPercent: -100 * (items.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (items.length - 1),
          end: () => "+=" + scrollWrapperRef.current?.offsetWidth
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const getIcon = (pos: string) => {
    if (pos.includes("Winner")) return <FaTrophy className="text-5xl text-accent drop-shadow-[0_0_15px_rgba(139,92,246,0.8)]" />;
    if (pos.includes("Top")) return <FaMedal className="text-5xl text-yellow-500" />;
    return <FaStar className="text-5xl text-blue-400" />;
  };

  return (
    <section ref={containerRef} id="achievements" className="w-full h-screen overflow-hidden bg-background relative flex items-center">
      <div className="absolute top-20 left-8 md:left-24 z-10 mix-blend-difference">
        <span className="text-accent font-mono text-sm uppercase tracking-widest block mb-4">03 / Achievements</span>
        <h2 className="font-display text-4xl md:text-6xl text-white font-bold">Milestones</h2>
      </div>

      <div ref={scrollWrapperRef} className="flex h-[60vh] md:h-[70vh] items-center w-[300vw] sm:w-[200vw] lg:w-[150vw] px-8 md:px-24 mt-20">
        {portfolioData.achievements.map((ach, idx) => (
          <div key={idx} className="achievement-card w-screen sm:w-[50vw] lg:w-[33vw] h-full flex-shrink-0 flex items-center justify-center p-4">
            <div className={`relative w-full max-w-md aspect-[4/3] rounded-3xl p-8 flex flex-col justify-between border backdrop-blur-md overflow-hidden ${
              ach.highlight 
                ? 'bg-accent/10 border-accent shadow-[0_0_40px_rgba(139,92,246,0.2)]' 
                : 'bg-neutral-900/60 border-neutral-800'
            }`}>
              
              {/* Optional: Glow orb for winner */}
              {ach.highlight && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent rounded-full filter blur-[60px] opacity-50 translate-x-1/2 -translate-y-1/2" />
              )}

              <div>
                {getIcon(ach.position)}
                <h3 className="font-display text-3xl md:text-4xl text-white mt-6 font-bold leading-tight">
                  {ach.title}
                </h3>
              </div>

              <div className="flex items-center gap-4 mt-8">
                <div className="h-[1px] flex-1 bg-neutral-700" />
                <span className={`font-mono uppercase tracking-widest font-bold ${ach.highlight ? 'text-accent' : 'text-neutral-400'}`}>
                  {ach.position}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
