"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioData } from "@/data/content";

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Word-by-word reveal
      if (textRef.current) {
        const words = textRef.current.querySelectorAll(".about-word");
        gsap.to(words, {
          opacity: 1,
          stagger: 0.1,
          ease: "none",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "bottom 50%",
            scrub: true,
          }
        });
      }

      // Stats counters
      if (statsRef.current) {
        const counters = statsRef.current.querySelectorAll(".stat-num");
        
        counters.forEach((counter) => {
          const target = parseFloat(counter.getAttribute("data-target") || "0");
          gsap.fromTo(counter, 
            { innerHTML: "0" },
            {
              innerHTML: target,
              duration: 2,
              ease: "power2.out",
              snap: { innerHTML: 1 },
              scrollTrigger: {
                trigger: statsRef.current,
                start: "top 80%",
                once: true,
              }
            }
          );
        });
      }

      // Image Mask Reveal
      if (imageRef.current) {
        gsap.from(imageRef.current, {
          clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
          opacity: 0,
          duration: 1.5,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 75%",
            once: true,
          }
        });
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const aboutText = `I am a passionate Full-Stack Developer specializing in the MERN stack and Next.js. I thrive on creating immersive, high-performance web applications with a focus on exceptional user experiences, cutting-edge animations, and robust backend architectures. Constant learning and pushing the boundaries of what is possible on the web is what drives me.`;

  return (
    <section ref={containerRef} id="about" className="relative w-full min-h-screen py-24 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Text and Stats */}
        <div className="flex flex-col gap-12">
          <div>
            <span className="text-accent font-mono text-sm uppercase tracking-widest mb-4 block">01 / About Me</span>
            <p ref={textRef} className="font-display text-2xl sm:text-4xl md:text-5xl leading-tight font-medium text-neutral-100">
              {aboutText.split(" ").map((word, i) => (
                <span key={i} className="about-word opacity-20 transition-colors duration-100 mr-2 md:mr-3 inline-block">
                  {word}
                </span>
              ))}
            </p>
          </div>

          <div className="bg-neutral-900/50 backdrop-blur-md border border-neutral-800 p-6 rounded-2xl">
            <h3 className="text-xl text-white mb-2 font-display">Education</h3>
            <p className="text-neutral-400 font-sans">{portfolioData.personal.education}</p>
          </div>

          <div ref={statsRef} className="grid grid-cols-3 gap-6">
            <div className="flex flex-col">
              <span className="text-5xl md:text-6xl font-display font-bold text-white flex items-end">
                <span className="stat-num" data-target="3">0</span>+
              </span>
              <span className="text-neutral-500 font-mono text-sm mt-2 uppercase tracking-wide">Hackathons</span>
            </div>
            <div className="flex flex-col">
              <span className="text-5xl md:text-6xl font-display font-bold text-white flex items-end">
                <span className="stat-num" data-target="10">0</span>+
              </span>
              <span className="text-neutral-500 font-mono text-sm mt-2 uppercase tracking-wide">Projects</span>
            </div>
            <div className="flex flex-col">
              <span className="text-5xl md:text-6xl font-display font-bold text-white flex items-end">
                <span className="stat-num" data-target="12">0</span>+
              </span>
              <span className="text-neutral-500 font-mono text-sm mt-2 uppercase tracking-wide">Technologies</span>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:ml-auto overflow-hidden rounded-3xl" ref={imageRef}>
          <div className="absolute inset-0 bg-accent/20 mix-blend-overlay z-10" />
          <img 
            src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Profile Avatar" 
            className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>

      </div>
    </section>
  );
}
