"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  scrollTrigger?: boolean;
}

export default function FadeIn({ 
  children, 
  delay = 0, 
  duration = 0.6,
  className = "",
  scrollTrigger = false
}: FadeInProps) {
  const transition = {
    delay,
    duration,
    ease: [0.16, 1, 0.3, 1] as const,
  };

  if (scrollTrigger) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.05, margin: "0px 0px -100px 0px" }}
        transition={transition}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
