"use client";

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { portfolioData } from '@/data/content';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [counter, setCounter] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Counter animation object to animate from 0 to 100
      const counterObj = { val: 0 };
      
      const tl = gsap.timeline({
        onComplete: () => {
          onComplete();
        }
      });

      tl.to(counterObj, {
        val: 100,
        duration: 2,
        ease: "power2.inOut",
        onUpdate: () => setCounter(Math.floor(counterObj.val))
      })
      .to(".preloader-text", {
        yPercent: -100,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in"
      }, "+=0.2")
      .to(containerRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: "power4.inOut"
      });

    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-background text-foreground"
    >
      <div className="overflow-hidden">
        <h1 className="preloader-text font-display text-5xl md:text-7xl font-bold tracking-tighter">
          {portfolioData.personal.name}
        </h1>
      </div>
      <div className="overflow-hidden mt-4">
        <p className="preloader-text font-sans text-2xl md:text-4xl text-accent font-light">
          {counter}%
        </p>
      </div>
    </div>
  );
}
