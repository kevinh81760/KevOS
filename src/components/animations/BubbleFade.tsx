"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BubbleFadeProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  scaleFrom?: number;
}

export default function BubbleFade({ 
  children, 
  delay = 0, 
  duration = 0.7,
  className = "",
  scaleFrom = 0.95
}: BubbleFadeProps) {
  const transition = {
    delay,
    duration,
    ease: [0.16, 1, 0.3, 1] as const,
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: scaleFrom }}
      animate={{ opacity: 1, scale: 1 }}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
