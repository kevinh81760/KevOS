"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BubbleFadeProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  scaleFrom?: number;
  scrollTrigger?: boolean;
  repeatOnScroll?: boolean;
}

export default function BubbleFade({ 
  children, 
  delay = 0, 
  duration = 0.7,
  className = "",
  scaleFrom = 0.95,
  scrollTrigger = false,
  repeatOnScroll = false
}: BubbleFadeProps) {
  const transition = {
    delay,
    duration,
    ease: [0.16, 1, 0.3, 1] as const,
  };

  if (scrollTrigger) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: scaleFrom }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: !repeatOnScroll, amount: 0, margin: "0px" }}
        transition={transition}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

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
