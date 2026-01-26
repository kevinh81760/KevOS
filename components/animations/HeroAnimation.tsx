"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TextReveal from "./TextReveal";
import StarIcon from "@/components/icons/StarIcon";

// Module-level flag to track if animation has played in this page session
// Resets on page reload but persists across component remounts (tab switches)
let hasAnimationPlayed = false;

export default function HeroAnimation() {
  const [shouldAnimate] = useState(!hasAnimationPlayed);

  useEffect(() => {
    if (shouldAnimate) {
      // Mark animation as played immediately to prevent replay on remount
      hasAnimationPlayed = true;
      
      // After animation completes (~2.8s = max delay 2.4s + duration 0.4s), 
      // ensure flag is set (redundant but safe)
      const timer = setTimeout(() => {
        hasAnimationPlayed = true;
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [shouldAnimate]);

  // Determine initial values based on whether animation should play
  const initialProps = shouldAnimate
    ? { scale: 0.3, top: "45%", y: "-50%" }
    : { scale: 1, top: "calc(16px + 1in)", y: 0 };

  const transitionProps = shouldAnimate
    ? {
        scale: { duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] },
        top: { duration: 1.5, delay: 1.5, ease: [0.22, 1, 0.36, 1] },
        y: { duration: 1.5, delay: 1.5, ease: [0.22, 1, 0.36, 1] },
      }
    : { duration: 0 };

  return (
    <div className="relative h-[calc(100vh-112px)] overflow-hidden">
      <motion.div
        className="absolute left-1/2 whitespace-nowrap"
        style={{ x: "-50%" }}
        initial={initialProps}
        animate={{ scale: 1, top: "calc(16px + 1in)", y: 0 }}
        transition={transitionProps}
      >
        <TextReveal skipAnimation={!shouldAnimate}>
          <h1 className="text-[7.5rem] font-bold text-white uppercase tracking-tight">KEVIN HA</h1>
        </TextReveal>
      </motion.div>
      <div className="absolute top-[calc(7.5rem+16px+2.5rem+2rem+1in)] left-0 w-full flex items-center px-6">
        <TextReveal delay={2.4} duration={0.4} direction="down" className="translate-x-[calc(1in-10px-50px)]" skipAnimation={!shouldAnimate}>
          <span className="text-white text-[34px] font-semibold tracking-wide">Product Engineer</span>
        </TextReveal>
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
          <TextReveal delay={2.2} duration={0.4} direction="down" skipAnimation={!shouldAnimate}>
            <StarIcon size={32} />
          </TextReveal>
        </div>
        <TextReveal delay={2.4} duration={0.4} className="ml-auto -translate-x-[calc(1in-10px-50px)]" direction="down" skipAnimation={!shouldAnimate}>
          <span className="text-white text-[34px] font-semibold tracking-wide">San Francisco, CA</span>
        </TextReveal>
      </div>
    </div>
  );
}
