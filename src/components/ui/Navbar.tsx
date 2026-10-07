"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#top" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full p-6 z-[100] mix-blend-difference flex justify-between items-center pointer-events-none">
        <div className="font-display text-white text-xl font-bold uppercase tracking-widest pointer-events-auto cursor-pointer select-none">
          SP.
        </div>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="pointer-events-auto flex flex-col gap-1.5 w-12 h-12 justify-center items-center rounded-full bg-transparent hover:bg-white/10 transition-colors z-[101]"
        >
          <span className={`w-6 h-0.5 bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`w-6 h-0.5 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-neutral-900 z-[90] flex flex-col items-center justify-center pointer-events-auto"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <div key={link.name} className="overflow-hidden">
                  <motion.a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                    className="font-display text-5xl md:text-7xl font-bold uppercase text-white hover:text-accent transition-colors block leading-none"
                  >
                    {link.name}
                  </motion.a>
                </div>
              ))}
            </nav>
            <div className="absolute bottom-12 flex gap-8 font-mono text-sm uppercase text-neutral-400">
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
