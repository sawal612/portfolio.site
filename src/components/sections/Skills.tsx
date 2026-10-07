"use client";

import React from "react";
import { Marquee } from "@/components/animations/Marquee";
import { GlassCard } from "@/components/ui/GlassCard";
import { portfolioData } from "@/data/content";
import { IconType } from "react-icons";
import { 
  SiNextdotjs, SiReact, SiHtml5, SiCss, SiTailwindcss, 
  SiGreensock, SiFramer, SiNodedotjs, SiExpress, 
  SiJavascript, SiCplusplus, SiGit, SiGithub 
} from "react-icons/si";

const iconMap: Record<string, IconType> = {
  "Next.js": SiNextdotjs,
  "React.js": SiReact,
  "HTML5": SiHtml5,
  "CSS3": SiCss,
  "Tailwind CSS": SiTailwindcss,
  "GSAP": SiGreensock,
  "Framer Motion": SiFramer,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "JavaScript": SiJavascript,
  "C++": SiCplusplus,
  "Git": SiGit,
  "GitHub": SiGithub
};

export default function Skills() {
  const marqueeItems1 = ["MERN Stack", "Next.js", "Animations", "UI/UX", "Creative Coding"];
  const marqueeItems2 = ["Frontend", "Backend", "3D Web", "Performance", "Clean Code"];

  return (
    <section id="skills" className="w-full py-32 overflow-hidden flex flex-col gap-24">
      
      {/* Marquees */}
      <div className="flex flex-col gap-4 rotate-[-2deg] scale-110">
        <Marquee items={marqueeItems1} direction={1} speed={1} />
        <Marquee items={marqueeItems2} direction={-1} speed={1.2} />
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full">
        <div className="mb-12">
          <span className="text-accent font-mono text-sm uppercase tracking-widest block mb-4">02 / Skills & Tools</span>
          <h2 className="font-display text-4xl md:text-5xl text-white font-bold">My Arsenal</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {portfolioData.skills.map((skill) => {
            const Icon = iconMap[skill.name];
            return (
              <GlassCard key={skill.name} className="h-32 md:h-40">
                {Icon ? <Icon className="text-4xl text-neutral-300 group-hover:text-accent transition-colors" /> : null}
                <span className="font-sans font-medium text-neutral-200 mt-2 text-center text-sm md:text-base">
                  {skill.name}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-mono absolute bottom-4">
                  {skill.category}
                </span>
              </GlassCard>
            );
          })}
        </div>
      </div>

    </section>
  );
}
