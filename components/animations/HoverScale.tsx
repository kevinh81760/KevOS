"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HoverScaleProps {
  children: ReactNode;
  scale?: number;
  duration?: number;
}

export default function HoverScale({ 
  children, 
  scale = 1.02, 
  duration = 0.5 
}: HoverScaleProps) {
  return (
    <motion.div
      whileHover={{
        scale,
        transition: {
          duration,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
    >
      {children}
    </motion.div>
  );
}
