"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ScrollFadeInOutProps {
  children: React.ReactNode;
  className?: string;
  fadeInStart?: number; // scroll position to start fading in
  fadeInEnd?: number; // scroll position to finish fading in
  fadeOutStart?: number; // scroll position to start fading out
  fadeOutEnd?: number; // scroll position to finish fading out
}

export default function ScrollFadeInOut({ 
  children, 
  className = "",
  fadeInStart = 0,
  fadeInEnd = 300,
  fadeOutStart = 1000,
  fadeOutEnd = 1400
}: ScrollFadeInOutProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollY } = useScroll();
  
  // Create opacity transformation that fades in, stays at 1, then fades out
  const opacity = useTransform(
    scrollY,
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
