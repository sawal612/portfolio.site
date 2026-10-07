"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface MarqueeProps {
  items: string[];
  direction?: 1 | -1;
  speed?: number;
  className?: string;
}

export function Marquee({ items, direction = 1, speed = 1, className = "" }: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!trackRef.current) return;

    let xPercent = 0;
    let animDirection = direction;

    const animate = () => {
      if (xPercent < -100) {
        xPercent = 0;
      } else if (xPercent > 0) {
        xPercent = -100;
      }
      
      gsap.set(trackRef.current, { xPercent });
      xPercent += 0.1 * speed * animDirection;
      requestAnimationFrame(animate);
    };

    const animId = requestAnimationFrame(animate);

    // ScrollVelocity effect
    const scroller = ScrollTrigger.create({
      onUpdate: (self) => {
        animDirection = direction * (self.direction === 1 ? 1 : -1);
        speed = 1 + Math.abs(self.getVelocity() / 100);
      }
    });

    return () => {
      cancelAnimationFrame(animId);
      scroller.kill();
    };
  }, [direction, speed]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden whitespace-nowrap flex w-full ${className}`}>
      <div ref={trackRef} className="flex gap-8 px-4 items-center">
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <span key={idx} className="text-4xl sm:text-6xl md:text-8xl font-display font-bold uppercase text-transparent stroke-text opacity-50 select-none">
            {item}
          </span>
        ))}
      </div>
      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
          color: transparent;
        }
      `}</style>
    </div>
  );
}
