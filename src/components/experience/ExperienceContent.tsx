"use client";

import { useEffect, useRef } from "react";
import { Experience } from "./types";
import BubbleFade from "@/components/animations/BubbleFade";

interface ExperienceContentProps {
  experiences: Experience[];
  onActiveChange: (id: string) => void;
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
}

export default function ExperienceContent({
  experiences,
  onActiveChange,
  scrollContainerRef,
}: ExperienceContentProps) {
  // Use ref to store the latest callback without recreating observer
  const onActiveChangeRef = useRef(onActiveChange);
  
  useEffect(() => {
    onActiveChangeRef.current = onActiveChange;
  }, [onActiveChange]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const sectionElements: { element: HTMLElement; id: string }[] = [];

    // Get all section elements
    experiences.forEach((exp) => {
      const element = document.getElementById(exp.id);
      if (element) {
        sectionElements.push({ element, id: exp.id });
      }
    });

    if (sectionElements.length === 0) return;

    // Track intersection ratios for all sections
    const intersectionRatios: { [key: string]: number } = {};

    const observer = new IntersectionObserver(
      (entries) => {
        // Update ratios for all entries in this callback
        entries.forEach((entry) => {
          const id = entry.target.id;
          intersectionRatios[id] = entry.intersectionRatio;
        });

        // Find the section with the highest intersection ratio
        let maxRatio = 0;
        let mostVisibleId = experiences[0]?.id;

        Object.entries(intersectionRatios).forEach(([id, ratio]) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            mostVisibleId = id;
          }
        });

        // Only update if we have a valid section with visibility
        if (mostVisibleId && maxRatio > 0) {
          onActiveChangeRef.current(mostVisibleId);
        }
      },
      {
        root: container, // Use content container as root instead of viewport
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: "-20% 0px -20% 0px", // Only consider middle 60% of container
      }
    );

    // Observe all sections
    sectionElements.forEach(({ element }) => {
      observer.observe(element);
    });

    // Set initial active section
    if (sectionElements.length > 0) {
      onActiveChangeRef.current(sectionElements[0].id);
    }

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, [experiences, scrollContainerRef]);

  // Set initial scroll position to 0 on mount
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.scrollTop = 0;
  }, [scrollContainerRef]);

  return (
    <div
      ref={scrollContainerRef}
      className="flex-1 h-full min-h-0 overflow-y-auto scrollbar-hide"
    >
      <div className="space-y-80 pb-32 pt-12 ml-[0.03in]">
        {experiences.map((experience) => (
          <section
            key={experience.id}
            id={experience.id}
            className="scroll-mt-24"
          >
            {/* Header Section */}
            <div className="max-w-[1025px] mt-[-2px]">
              <BubbleFade key={`${experience.id}-title`} delay={0.1}>
                <h2 className="text-3xl font-semibold text-white tracking-wide mb-3">
                  {experience.title}
                </h2>
              </BubbleFade>

              <BubbleFade key={`${experience.id}-company`} delay={0.15}>
                <p className="text-zinc-400 text-base mb-10 font-medium">
                  {experience.company} | {experience.dates}
                </p>
              </BubbleFade>
            </div>

            {/* What I Did Section */}
            <div className="max-w-[1025px] mt-[-2px]">
              <BubbleFade key={`${experience.id}-what`} delay={0.2}>
                <div className="mb-10">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    What I Did
                  </h3>
                  <p className="text-zinc-300 leading-relaxed text-base font-medium">
                    {experience.whatIDid}
                  </p>
                </div>
              </BubbleFade>
            </div>

            {/* How I Did It Section */}
            <div className="max-w-[1025px] mt-[-2px]">
              <BubbleFade key={`${experience.id}-how`} delay={0.25}>
                <div className="mb-10">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    How I Did It
                  </h3>
                  <ul className="space-y-2.5">
                    {experience.howIDidIt.map((item, index) => (
                      <li
                        key={index}
                        className="text-zinc-300 leading-relaxed flex items-start text-base font-medium"
                      >
                        <span className="text-white mr-3 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </BubbleFade>
            </div>

            {/* What I Used Section */}
            <div className="max-w-[1025px] mt-[-2px]">
              <BubbleFade key={`${experience.id}-used`} delay={0.3}>
                <div className="mb-10">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    What I Used
                  </h3>
                  <ul className="space-y-2.5">
                    {experience.whatIUsed.map((item, index) => (
                      <li
                        key={index}
                        className="text-zinc-300 leading-relaxed flex items-start text-base font-medium"
                      >
                        <span className="text-white mr-3 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </BubbleFade>

              {/* Reflection */}
              {experience.reflection && (
                <BubbleFade key={`${experience.id}-reflection`} delay={0.35}>
                  <div className="mt-8 pt-8 border-t border-zinc-800">
                    <p className="text-zinc-400 italic leading-relaxed font-normal">
                      {experience.reflection}
                    </p>
                  </div>
                </BubbleFade>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
