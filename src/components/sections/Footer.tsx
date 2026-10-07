"use client";

import React, { useEffect, useState } from "react";
import { portfolioData } from "@/data/content";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(new Date().toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' }));
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-background pt-24 pb-8 px-4 sm:px-8 border-t border-neutral-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Large Outlined Text */}
        <div className="w-full text-center mb-16 select-none relative">
          <h2 className="text-[12vw] font-display font-black leading-none text-transparent tracking-tighter"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.15)" }}>
            SAWAL PUSHKARNA
          </h2>
          <button 
            onClick={scrollToTop}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-accent text-white flex items-center justify-center font-sans font-medium text-sm sm:text-lg hover:scale-110 transition-transform shadow-[0_0_30px_rgba(139,92,246,0.4)]"
          >
            Back to<br/>Top
          </button>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-neutral-800">
          <div className="flex gap-6 font-mono text-xs uppercase text-neutral-500">
            <span>© {time ? new Date().getFullYear() : ""}</span>
            <span>All Rights Reserved.</span>
          </div>

          <div className="font-mono text-xs text-neutral-400">
            Local Time: {time}
          </div>

          <div className="flex gap-6 font-mono text-xs uppercase text-neutral-400">
            <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">GitHub</a>
            <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
            <a href={portfolioData.personal.resume} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">Resume</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
