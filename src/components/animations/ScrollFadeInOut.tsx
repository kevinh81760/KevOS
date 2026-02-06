"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ScrollFadeInOutProps {
  children: React.ReactNode;
  className?: string;
  fadeInStart?: number; // viewport progress to start fading in (0-1)
  fadeInEnd?: number; // viewport progress to finish fading in (0-1)
  fadeOutStart?: number; // viewport progress to start fading out (0-1)
  fadeOutEnd?: number; // viewport progress to finish fading out (0-1)
}

export default function ScrollFadeInOut({ 
  children, 
  className = "",
  fadeInStart = 0,
  fadeInEnd = 0.3,
  fadeOutStart = 0.7,
  fadeOutEnd = 1
}: ScrollFadeInOutProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Track scroll progress relative to the element's position in the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"] // Track from when element enters to when it leaves
  });
  
  // Create opacity transformation that fades in, stays at 1, then fades out
  // Using viewport progress (0 to 1) instead of absolute scroll values
  const opacity = useTransform(
    scrollYProgress,
    [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
    [0, 1, 1, 0]
  );

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
