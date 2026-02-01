import { useState, useEffect, RefObject } from 'react';

/**
 * useActiveExperience Hook
 * 
 * Tracks which experience section is currently visible in the viewport
 * using Intersection Observer API. Updates as user scrolls.
 * 
 * @param containerRef - Reference to the scrollable container
 * @param experienceIds - Array of experience IDs to track
 * @returns The ID of the currently active experience
 */
export function useActiveExperience(
  containerRef: RefObject<HTMLDivElement>,
  experienceIds: string[]
): string | null {
  const [activeId, setActiveId] = useState<string | null>(experienceIds[0] || null);

  useEffect(() => {
    if (!containerRef.current || experienceIds.length === 0) return;

    const container = containerRef.current;
    const sections = experienceIds.map(id => 
      container.querySelector(`[data-experience-id="${id}"]`)
    ).filter(Boolean) as Element[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the section with the highest intersection ratio
        let maxRatio = 0;
        let activeSection: Element | null = null;

        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            activeSection = entry.target as Element;
          }
        });

        // If we have an active section, update the active ID
        if (activeSection && maxRatio > 0.1) {
          const element = activeSection as Element;
          const id = element.getAttribute('data-experience-id');
          if (id) {
            setActiveId(id);
          }
        }
      },
      {
        root: container,
        rootMargin: '-20% 0px -20% 0px', // Trigger when section is in middle 60% of viewport
        threshold: [0, 0.1, 0.5, 1]
      }
    );

    // Observe all sections
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [containerRef, experienceIds]);

  return activeId;
}
