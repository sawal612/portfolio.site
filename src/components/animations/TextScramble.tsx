"use client";

import { useEffect, useState, useRef } from "react";

const CHARS = "!<>-_\\\\/[]{}—=+*^?#________";

export function TextScramble({ phrases }: { phrases: string[] }) {
  const [text, setText] = useState(phrases[0]);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    let frameId: number;
    let iteration = 0;
    const targetPhrase = phrases[phraseIndex];
    
    const scramble = () => {
      setText((current) => {
        const nextText = targetPhrase
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return targetPhrase[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("");
        
        return nextText;
      });

      if (iteration >= targetPhrase.length) {
        cancelAnimationFrame(frameId);
        setTimeout(() => {
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, 2000);
      } else {
        iteration += 1 / 3;
        frameId = requestAnimationFrame(scramble);
      }
    };

    frameId = requestAnimationFrame(scramble);

    return () => cancelAnimationFrame(frameId);
  }, [phraseIndex, phrases]);

  return <span className="font-mono">{text}</span>;
}
