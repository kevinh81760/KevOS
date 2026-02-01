"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface IconWiggleProps {
  children: ReactNode;
}

export default function IconWiggle({ children }: IconWiggleProps) {
  return (
    <motion.div
      whileHover={{
        rotate: [0, -4, 4, -3, 3, 0],
        scale: 1.08,
        filter: "drop-shadow(0 0 6px rgba(255,255,255,0.4))",
        transition: {
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
    >
      {children}
    </motion.div>
  );
}
