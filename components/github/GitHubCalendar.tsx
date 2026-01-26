"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GitHubCalendar as GitHubCalendarLib } from "react-github-calendar";

// Module-level flag to track if animation has played in this page session
// Resets on page reload but persists across component remounts (page navigation)
let hasAnimationPlayed = false;

interface GitHubCalendarWrapperProps {
  className?: string;
}

export default function GitHubCalendar({ className = "" }: GitHubCalendarWrapperProps) {
  const [shouldAnimate] = useState(!hasAnimationPlayed);

  useEffect(() => {
    if (shouldAnimate) {
      // Mark animation as played immediately to prevent replay on remount
      hasAnimationPlayed = true;
      
      // After animation completes (~3.6s = delay 2.8s + duration 0.8s), 
      // ensure flag is set (redundant but safe)
      const timer = setTimeout(() => {
        hasAnimationPlayed = true;
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [shouldAnimate]);

  // Determine initial values based on whether animation should play
  const initialProps = shouldAnimate
    ? { opacity: 0, y: 20 }
    : { opacity: 1, y: 0 };

  const transitionProps = shouldAnimate
    ? {
        duration: 0.8,
        delay: 2.8,
        ease: [0.22, 1, 0.36, 1],
      }
    : { duration: 0 };

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .github-calendar-wrapper svg text[dominant-baseline="hanging"] {
            fill: #a1a1aa !important;
          }
          .github-calendar-wrapper {
            display: flex;
            justify-content: center;
            width: 100%;
            overflow: hidden;
          }
          .github-calendar-wrapper > * {
            display: flex;
            justify-content: center;
            width: 100%;
          }
          .github-calendar-wrapper svg {
            display: block;
            margin-left: auto;
            margin-right: auto;
          }
        `
      }} />
      <motion.div
        className={`w-full bg-[#111111] border border-[#242424] rounded-lg p-6 md:p-8 lg:p-10 mx-[calc(1in+1.5rem)] ${className}`}
        initial={initialProps}
        animate={{ opacity: 1, y: 0 }}
        transition={transitionProps}
      >
        <div className="github-calendar-wrapper">
          <GitHubCalendarLib
            username="kevinh81760"
            colorScheme="dark"
            blockSize={20}
            blockMargin={5}
            fontSize={20}
            theme={{
              dark: ["#0a0a0a", "#0e4429", "#006d32", "#26a641", "#39d353"],
            }}
            style={{
              color: "#e4e4e7",
            }}
          />
        </div>
      </motion.div>
    </>
  );
}
