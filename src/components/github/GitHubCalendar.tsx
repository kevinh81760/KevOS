"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { GitHubCalendar as GitHubCalendarLib } from "react-github-calendar";
import { useHasAnimationPlayed } from "@/lib/hooks/useHasAnimationPlayed";

interface GitHubCalendarWrapperProps {
  className?: string;
}

export default function GitHubCalendar({ className = "" }: GitHubCalendarWrapperProps) {
  // Synchronously check sessionStorage before first render
  const hasPlayed = useHasAnimationPlayed('github-calendar-animation-played');
  const shouldAnimate = !hasPlayed;

  useEffect(() => {
    // Mark animation as played in sessionStorage when it starts
    if (shouldAnimate && typeof window !== 'undefined') {
      sessionStorage.setItem('github-calendar-animation-played', 'true');
    }
  }, [shouldAnimate]);

  // Determine initial values based on whether animation should play
  const initialProps = shouldAnimate
    ? { opacity: 0, y: 20 }
    : { opacity: 1, y: 0 };

  const transitionProps = shouldAnimate
    ? {
        duration: 0.8,
        delay: 2.55,
        ease: [0.22, 1, 0.36, 1],
      }
    : { duration: 0 };

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .github-calendar-wrapper svg text {
            font-family: 'Akzidenz-Grotesk', sans-serif !important;
          }
          .github-calendar-wrapper svg text[dominant-baseline="hanging"] {
            fill: #a1a1aa !important;
            font-family: 'Akzidenz-Grotesk', sans-serif !important;
          }
          article.react-activity-calendar svg text {
            font-family: 'Akzidenz-Grotesk', sans-serif !important;
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
          .react-activity-calendar__footer .react-activity-calendar__count {
            font-family: 'Eurostile', sans-serif !important;
          }
          .react-activity-calendar__legend-color span {
            font-family: 'Eurostile', sans-serif !important;
          }
          footer.react-activity-calendar__footer span {
            font-family: 'Eurostile', sans-serif !important;
          }
          .github-calendar-wrapper footer span {
            font-family: 'Eurostile', sans-serif !important;
          }
        `
      }} />
      <motion.div
        className={`w-full bg-[#111111] border border-[#242424] p-6 md:p-8 lg:p-10 mx-[calc(1in+1.5rem)] ${className}`}
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
