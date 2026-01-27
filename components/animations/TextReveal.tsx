"use client";

import { motion } from "framer-motion";

interface TextRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: "up" | "down";
  skipAnimation?: boolean;
}

export default function TextReveal({ 
  children, 
  delay = 0, 
  duration = 0.6,
  className = "",
  direction = "up",
  skipAnimation = false
}: TextRevealProps) {
  const initialY = direction === "down" ? "-100%" : "100%";
  
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: skipAnimation ? 0 : initialY }}
        animate={{ y: 0 }}
        transition={skipAnimation ? { duration: 0 } : { 
          duration, 
          delay, 
          ease: [0.22, 1, 0.36, 1] 
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
