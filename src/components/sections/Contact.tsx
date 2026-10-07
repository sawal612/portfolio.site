"use client";

import React, { useState } from "react";
import MagneticButton from "@/components/ui/MagneticButton";
import { portfolioData } from "@/data/content";
import { FiMail, FiGithub, FiLinkedin, FiCopy, FiCheck } from "react-icons/fi";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const [result, setResult] = useState("");

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");
    
    const formData = new FormData(event.currentTarget);
    
    // Web3Forms Access Key - You will need to replace this with your actual key
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent!");
        (event.target as HTMLFormElement).reset();
        setTimeout(() => setResult(""), 3000);
      } else {
        console.log("Error", data);
        setResult("Something went wrong.");
      }
    } catch (error) {
      console.log("Error", error);
      setResult("Error sending message.");
    }
  };

  return (
    <section id="contact" className="w-full relative py-32 bg-background overflow-hidden border-t border-neutral-900">
      <div className="absolute inset-0 pointer-events-none opacity-5 flex flex-col justify-center gap-10 select-none overflow-hidden">
        <h2 className="text-[15vw] font-display font-black whitespace-nowrap text-white leading-none -ml-20">LET'S WORK TOGETHER</h2>
        <h2 className="text-[15vw] font-display font-black whitespace-nowrap text-white leading-none -ml-64">LET'S WORK TOGETHER</h2>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10 flex flex-col items-center">
        <span className="text-accent font-mono text-sm uppercase tracking-widest block mb-12">05 / Contact</span>
        
        <h2 className="font-display text-5xl md:text-8xl text-white font-bold text-center mb-16 max-w-4xl tracking-tight leading-[0.9]">
          Have an idea? <br/>
          <span className="text-neutral-500">Let's build it.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full mt-12">
          
          {/* Left side info */}
          <div className="flex flex-col gap-10">
            <div>
              <p className="font-mono text-sm text-neutral-500 mb-4 uppercase">Direct Line</p>
              <div 
                onClick={copyEmail}
                className="group flex items-center gap-4 cursor-pointer"
              >
                <span className="font-display text-2xl sm:text-3xl lg:text-4xl hover:text-accent transition-colors break-all">
                  {portfolioData.personal.email}
                </span>
                <button className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors">
                  {copied ? <FiCheck className="text-white" /> : <FiCopy className="text-neutral-400 group-hover:text-white" />}
                </button>
              </div>
            </div>

            <div>
              <p className="font-mono text-sm text-neutral-500 mb-6 uppercase">Socials</p>
              <div className="flex gap-4">
                <MagneticButton className="w-16 h-16 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-accent hover:border-accent flex items-center justify-center text-2xl transition-colors">
                  <a href={portfolioData.personal.github} target="_blank" rel="noreferrer"><FiGithub /></a>
                </MagneticButton>
                <MagneticButton className="w-16 h-16 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-accent hover:border-accent flex items-center justify-center text-2xl transition-colors">
                  <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer"><FiLinkedin /></a>
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* Right side form */}
          <form className="flex flex-col gap-6" onSubmit={onSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-mono text-sm text-neutral-500 uppercase">Name</label>
              <input 
                type="text" 
                id="name"
                name="name"
                required
                placeholder="What's your name?"
                className="bg-transparent border-b border-neutral-700 py-4 text-white focus:outline-none focus:border-accent transition-colors font-sans text-xl placeholder:text-neutral-700"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-mono text-sm text-neutral-500 uppercase">Email</label>
              <input 
                type="email" 
                id="email"
                name="email"
                required
                placeholder="What's your email?"
                className="bg-transparent border-b border-neutral-700 py-4 text-white focus:outline-none focus:border-accent transition-colors font-sans text-xl placeholder:text-neutral-700"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-mono text-sm text-neutral-500 uppercase">Message</label>
              <textarea 
                id="message"
                name="message"
                required
                rows={3}
                placeholder="Hello Sawal, can you help me with..."
                className="bg-transparent border-b border-neutral-700 py-4 text-white focus:outline-none focus:border-accent transition-colors font-sans text-xl placeholder:text-neutral-700 resize-none"
              />
            </div>
            
            <div className="flex items-center gap-4 mt-4">
              <button 
                type="submit"
                disabled={result === "Sending..."}
                className="bg-white text-black font-medium py-5 px-8 rounded-full hover:bg-accent hover:text-white transition-colors text-lg flex items-center justify-between group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>Send Message</span>
                <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform ml-4">
                  →
                </span>
              </button>
              
              {result && (
                <span className={`font-mono text-sm ${result.includes("Error") || result.includes("wrong") ? "text-red-400" : "text-accent"}`}>
                  {result}
                </span>
              )}
            </div>
          </form>

        </div>
      </div>
    </section>
  );
}
