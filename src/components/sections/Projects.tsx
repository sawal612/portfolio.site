"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioData } from "@/data/content";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.project-card');

      cards.forEach((card, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top top+=100",
          endTrigger: containerRef.current,
          end: "bottom bottom",
          pin: true,
          pinSpacing: false,
          id: `pin-${i}`,
        });

        if (i !== cards.length - 1) {
          gsap.to(card, {
            scale: 0.9,
            opacity: 0,
            scrollTrigger: {
              trigger: cards[i + 1],
              start: "top bottom",
              end: "top top",
              scrub: true,
            }
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="w-full relative py-24 bg-background" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-24">
        <span className="text-accent font-mono text-sm uppercase tracking-widest block mb-4">04 / Selected Work</span>
        <h2 className="font-display text-5xl md:text-7xl text-white font-bold tracking-tighter">
          Featured<br/>Projects
        </h2>
      </div>

      <div className="relative w-full pb-48">
        {portfolioData.projects.map((project, index) => (
          <div 
            key={project.id} 
            className="project-card sticky top-[80px] lg:top-[100px] w-full max-w-6xl mx-auto px-4 sm:px-8 h-[calc(100vh-120px)] lg:h-[70vh] lg:min-h-[600px] flex flex-col justify-center origin-top mb-16 lg:mb-32"
          >
            <div className="w-full h-full bg-neutral-900 border border-neutral-800 rounded-3xl lg:rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl relative">
              
              {/* Content Box */}
              <div className="w-full lg:w-1/2 p-6 sm:p-10 md:p-16 flex flex-col justify-between z-10 bg-neutral-900/90 backdrop-blur-sm order-2 lg:order-1 h-[55%] lg:h-full overflow-y-auto">
                <div>
                  <span className="font-mono text-4xl sm:text-6xl md:text-8xl text-neutral-800 font-bold block mb-2 sm:mb-4 leading-none">
                    {project.id}
                  </span>
                  <h3 className="font-display text-2xl sm:text-4xl md:text-5xl text-white font-bold mb-4 sm:mb-6">
                    {project.title}
                  </h3>
                  <p className="font-sans text-neutral-400 text-sm sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 max-w-md">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-neutral-700 text-[10px] sm:text-xs font-mono text-neutral-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 sm:gap-4 mt-auto">
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 lg:flex-none flex items-center justify-center gap-2 bg-accent text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-accent/90 transition-colors text-sm sm:text-base"
                  >
                    <FiExternalLink /> Live Site
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 lg:flex-none flex items-center justify-center gap-2 bg-transparent border border-neutral-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-neutral-800 transition-colors text-sm sm:text-base"
                  >
                    <FiGithub /> GitHub
                  </a>
                </div>
              </div>

              {/* Image Box */}
              <div className="w-full lg:w-1/2 h-[45%] lg:h-full relative overflow-hidden group order-1 lg:order-2 shrink-0 border-b lg:border-b-0 lg:border-l border-neutral-800">
                <div className="absolute inset-0 bg-accent/20 z-10 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0" />
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>

            </div>
          </div>
        ))}
      </div>
      
      {/* More Projects placeholder */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-24">
        <h3 className="font-display text-3xl mb-8 flex items-center gap-4">
          More Projects
          <span className="flex items-center gap-2 text-xs font-mono uppercase bg-neutral-800 text-neutral-300 px-3 py-1 rounded-full border border-neutral-700">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" /> Building
          </span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.moreProjects.map((p, i) => (
            <div key={i} className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl hover:border-neutral-700 transition-colors">
              <h4 className="text-xl font-display mb-3">{p.title}</h4>
              <p className="text-neutral-500 mb-6">{p.description}</p>
              <div className="flex gap-2">
                {p.tech.map(t => (
                  <span key={t} className="text-xs font-mono text-neutral-400">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
