"use client";

import { useEffect, useRef } from "react";
import { Experience } from "./types";
import BubbleFade from "@/components/animations/BubbleFade";
import { useSnapScroll } from "@/lib/hooks/useSnapScroll";

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
  // Get section IDs for snap scroll hook
  const sectionIds = experiences.map((exp) => exp.id);

  // Initialize snap scroll with GSAP
  const { scrollContainerRef: snapScrollRef } = useSnapScroll({
    sectionIds,
    onActiveChange,
  });

  // Merge the refs - use the snap scroll ref but also update the parent ref
  useEffect(() => {
    if (snapScrollRef.current) {
      // @ts-ignore - Merging refs
      scrollContainerRef.current = snapScrollRef.current;
    }
  }, [scrollContainerRef, snapScrollRef]);

  // Set initial scroll position to 0 on mount
  useEffect(() => {
    const container = snapScrollRef.current;
    if (!container) return;

    container.scrollTop = 0;
  }, [snapScrollRef]);

  return (
    <div
      ref={snapScrollRef}
      className="flex-1 h-full min-h-0 overflow-y-auto scrollbar-hide scroll-smooth [scroll-snap-type:y_mandatory]"
      style={{
        scrollSnapType: "y mandatory",
      }}
    >
      <div className="space-y-80 pb-32 pt-12 ml-[0.03in]">
        {experiences.map((experience) => (
          <section
            key={experience.id}
            id={experience.id}
            className="snap-start snap-always"
            style={{
              scrollMarginTop: "46px",
              willChange: "opacity",
            }}
          >
            {/* Header Section */}
            <div className="max-w-[1025px] mt-[-2px]">
              <BubbleFade key={`${experience.id}-title`} delay={0.1}>
                <h2 className="text-3xl font-semibold text-white tracking-wide mb-3">
                  {experience.title}
                </h2>
              </BubbleFade>

              <BubbleFade key={`${experience.id}-company`} delay={0.15}>
                <p className="text-zinc-400 text-base mb-10 font-medium" style={{ fontFamily: 'Eurostile, sans-serif' }}>
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
                  <p className="text-zinc-300 leading-relaxed text-base font-medium" style={{ fontFamily: "'Akzidenz-Grotesk', sans-serif" }}>
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
                        <span style={{ fontFamily: "'Akzidenz-Grotesk', sans-serif" }}>{item}</span>
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
                        <span style={{ fontFamily: "'Akzidenz-Grotesk', sans-serif" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </BubbleFade>

              {/* Reflection */}
              {experience.reflection && (
                <BubbleFade key={`${experience.id}-reflection`} delay={0.35}>
                  <div className="mt-8 pt-8 border-t border-zinc-800">
                    <p className="text-zinc-400 italic leading-relaxed font-normal" style={{ fontFamily: "'Akzidenz-Grotesk', sans-serif" }}>
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
