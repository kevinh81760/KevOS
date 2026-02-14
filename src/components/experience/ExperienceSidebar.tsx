"use client";

import { useEffect, useLayoutEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { Experience } from "./types";

interface ExperienceSidebarProps {
  experiences: Experience[];
  activeId: string;
  onCompanyClick: (id: string) => void;
}

export default function ExperienceSidebar({
  experiences,
  activeId,
  onCompanyClick,
}: ExperienceSidebarProps) {
  const activeIndex = experiences.findIndex((exp) => exp.id === activeId);
  const barHeight = 20; // Height of the white bar
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);
  const isInitialMount = useRef(true);
  
  // Estimate initial position: button height (32px) + spacing (16px) = 48px per item
  // Button center is at index * 48 + 16 (half of button height)
  // Bar Y is button center - barHeight / 2
  const estimatedInitialY = activeIndex * 48 + 16 - barHeight / 2;
  const [barY, setBarY] = useState(estimatedInitialY);

  // Calculate bar position helper function
  const updateBarPosition = useCallback(() => {
    const activeButton = buttonRefs.current[activeIndex];
    const container = containerRef.current;
    
    if (activeButton && container) {
      const buttonRect = activeButton.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const relativeTop = buttonRect.top - containerRect.top;
      const buttonCenter = relativeTop + buttonRect.height / 2;
      const newBarY = buttonCenter - barHeight / 2;
      setBarY(newBarY);
    }
  }, [activeIndex, barHeight]);

  // Set initial position synchronously before paint (no animation)
  useLayoutEffect(() => {
    if (isInitialMount.current && barRef.current) {
      updateBarPosition();
      // Set initial position without animation
      gsap.set(barRef.current, { y: barY });
      isInitialMount.current = false;
    }
  }, [updateBarPosition, barY]);

  // Animate bar position with retro iPod-style GSAP animation
  useEffect(() => {
    if (!isInitialMount.current && barRef.current) {
      updateBarPosition();
      
      // iPod-style animation with slight overshoot for retro feel
      gsap.to(barRef.current, {
        y: barY,
        duration: 0.6,
        ease: "power2.inOut",
        overwrite: true,
        onComplete: () => {
          // Add subtle "bounce back" for retro feedback
          if (barRef.current) {
            gsap.to(barRef.current, {
              y: barY,
              duration: 0.15,
              ease: "power1.out",
            });
          }
        },
      });
    }

    // Update on resize
    window.addEventListener("resize", updateBarPosition);
    return () => window.removeEventListener("resize", updateBarPosition);
  }, [activeIndex, barY, updateBarPosition]);

  return (
    <div className="fixed top-[var(--sidebar-top)] left-[var(--sidebar-left)] w-64 pr-8 z-10" ref={containerRef}>
      <div className="relative">
          {/* White bar indicator with retro iPod-style animation */}
          <div
            ref={barRef}
            className="absolute bg-white"
            style={{
              left: "0px",
              width: "3px",
              height: `${barHeight}px`,
              willChange: "transform",
            }}
          />
          
          {/* Company list */}
          <div className="space-y-4">
            {experiences.map((experience, index) => (
              <button
                key={experience.id}
                ref={(el) => {
                  buttonRefs.current[index] = el;
                }}
                onClick={() => onCompanyClick(experience.id)}
                className={`text-left w-full transition-colors duration-200 text-xl ${
                  activeId === experience.id
                    ? "text-white font-semibold"
                    : "text-zinc-600 hover:text-zinc-400 font-bold"
                }`}
                style={{
                  paddingLeft: "16px",
                  lineHeight: "1.5",
                  minHeight: "32px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {experience.company}
              </button>
            ))}
          </div>
        </div>
    </div>
  );
}
