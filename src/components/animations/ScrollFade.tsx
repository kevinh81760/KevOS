"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ScrollFadeProps {
  children: React.ReactNode;
  className?: string;
  startFade?: number; // scroll distance to start fading (in pixels)
  endFade?: number; // scroll distance to complete fade (in pixels)
}

export default function ScrollFade({ 
  children, 
  className = "",
  startFade = 0,
  endFade = 300
}: ScrollFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollY } = useScroll();
  
  // Map scroll position to opacity
  // When scrollY is at startFade, opacity is 1
  // When scrollY is at endFade, opacity is 0
  const opacity = useTransform(
    scrollY,
    [startFade, endFade],
    [1, 0]
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
