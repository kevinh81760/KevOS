"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ViewportScrollFadeProps {
  children: React.ReactNode;
  className?: string;
}

export default function ViewportScrollFade({ 
  children, 
  className = ""
}: ViewportScrollFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of this specific element
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"] // Track from when element enters bottom to when it exits top
  });
  
  // Fade out as the element scrolls up and out of view
  // When element is in the middle/bottom of viewport: opacity = 1
  // As element approaches top of viewport: opacity fades to 0
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1], // Visible in middle range, fade out at top
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
