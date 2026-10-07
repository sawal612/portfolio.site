"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import dynamic from 'next/dynamic';
import { SplitText } from '@/lib/splitText';
import { TextScramble } from '@/components/animations/TextScramble';
import MagneticButton from '@/components/ui/MagneticButton';

const HeroScene = dynamic(() => import('@/components/three/HeroScene'), { ssr: false });

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 2.5 }); // Wait for preloader

      tl.from(".hero-title-char", {
        y: 100,
        opacity: 0,
        rotateX: -90,
        stagger: 0.02,
        duration: 1,
        ease: "power4.out"
      })
      .from(".hero-subtitle", {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power2.out"
      }, "-=0.5")
      .from(".hero-cta", {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.5")
      .from(".hero-image", {
        scale: 0,
        opacity: 0,
        rotation: 15,
        duration: 1,
        ease: "back.out(1.5)"
      }, "-=0.8");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      <HeroScene />
      
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-center text-center md:text-left px-4 max-w-6xl mx-auto gap-12">
        
        <div className="flex flex-col items-center md:items-start flex-1">
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter leading-[0.9] mb-6 perspective-1000">
            <SplitText 
              text="Sawal Pushkarna" 
              charClassName="hero-title-char origin-bottom" 
            />
          </h1>
          
          <div className="hero-subtitle text-xl md:text-3xl text-neutral-400 font-light mb-12 h-10">
            I build things for the web. <br className="md:hidden"/>
            <span className="text-accent md:ml-2">
              <TextScramble phrases={["Full-Stack Developer", "MERN Specialist", "Hackathon Winner", "Next.js Builder"]} />
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <MagneticButton className="hero-cta bg-accent text-white px-8 py-4 rounded-full font-sans font-medium text-lg transition-transform hover:scale-105 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]">
              <a href="#projects">View Work</a>
            </MagneticButton>
            <MagneticButton className="hero-cta bg-transparent border border-neutral-600 text-white px-8 py-4 rounded-full font-sans font-medium text-lg transition-colors hover:bg-neutral-800">
              <a href="#contact">Contact Me</a>
            </MagneticButton>
          </div>
        </div>

        <div className="hero-image relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-neutral-800 shadow-[0_0_50px_rgba(139,92,246,0.2)] shrink-0 mt-12 md:mt-0">
          <img 
            src="/hero-2.jpeg" 
            alt="Sawal Pushkarna" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>

      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs tracking-widest uppercase font-mono">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
