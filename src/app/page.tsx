"use client";

import { useState } from "react";
import Preloader from "@/components/sections/Preloader";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Achievements from "@/components/sections/Achievements";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/ui/Navbar";
import CustomCursor from "@/components/ui/CustomCursor";

export default function Home() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <main id="top" className="relative min-h-screen selection:bg-accent selection:text-white bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      
      {!preloaderDone && (
        <Preloader onComplete={() => setPreloaderDone(true)} />
      )}
      
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Achievements />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
