"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface UseSnapScrollOptions {
  sectionIds: string[];
  onActiveChange?: (id: string) => void;
}

/**
 * Custom hook for iPod-style snap scrolling with GSAP
 * Provides smooth momentum scrolling with fade effects on sections
 */
export function useSnapScroll({ sectionIds, onActiveChange }: UseSnapScrollOptions) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());
  const scrollTriggersRef = useRef<ScrollTrigger[]>([]);
  const activeIdRef = useRef<string | null>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || sectionIds.length === 0) return;

    // Clear existing ScrollTriggers
    scrollTriggersRef.current.forEach((trigger) => trigger.kill());
    scrollTriggersRef.current = [];

    // Get all section elements
    const sections: HTMLElement[] = [];
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        sections.push(element);
        sectionRefs.current.set(id, element);
      }
    });

    if (sections.length === 0) return;

    // Set initial opacity for all sections (fade effect)
    sections.forEach((section, index) => {
      gsap.set(section, {
        opacity: index === 0 ? 1 : 0.3,
      });
    });

    // Function to update active section and fade states
    const updateActiveSectionFade = () => {
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.top + containerRect.height / 2;

      let closestSection: HTMLElement | null = null;
      let closestDistance = Infinity;
      let closestId = "";

      // Find which section is closest to center
      sections.forEach((section) => {
        const sectionRect = section.getBoundingClientRect();
        const sectionCenter = sectionRect.top + sectionRect.height / 2;
        const distance = Math.abs(sectionCenter - containerCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = section;
          closestId = section.id;
        }
      });

      // Update opacity for all sections
      if (closestSection) {
        sections.forEach((section) => {
          if (section === closestSection) {
            // Fade in active section
            gsap.to(section, {
              opacity: 1,
              duration: 0.5,
              ease: "power2.out",
              overwrite: true,
            });
          } else {
            // Fade out inactive sections
            gsap.to(section, {
              opacity: 0.3,
              duration: 0.4,
              ease: "power2.in",
              overwrite: true,
            });
          }
        });

        // Update active section callback
        if (activeIdRef.current !== closestId) {
          activeIdRef.current = closestId;
          onActiveChange?.(closestId);
        }
      }
    };

    // Create ScrollTrigger for each section to track when they're in view
    sections.forEach((section) => {
      const trigger = ScrollTrigger.create({
        trigger: section,
        scroller: container,
        start: "top bottom",
        end: "bottom top",
        onUpdate: () => {
          updateActiveSectionFade();
        },
      });

      scrollTriggersRef.current.push(trigger);
    });

    // Also update on scroll for smooth transitions
    container.addEventListener("scroll", updateActiveSectionFade);

    // Add smooth momentum scrolling effect (iPod-style)
    // This creates a slight ease-out effect when the user stops scrolling
    let scrollTimeout: NodeJS.Timeout;
    let lastScrollTop = container.scrollTop;
    let velocity = 0;

    const handleScroll = () => {
      const currentScrollTop = container.scrollTop;
      velocity = currentScrollTop - lastScrollTop;
      lastScrollTop = currentScrollTop;

      clearTimeout(scrollTimeout);

      // When user stops scrolling, add gentle momentum
      scrollTimeout = setTimeout(() => {
        if (Math.abs(velocity) > 1) {
          const momentum = velocity * 0.3; // Damping factor for iPod feel
          gsap.to(container, {
            scrollTop: container.scrollTop + momentum,
            duration: 0.3,
            ease: "power2.out",
          });
        }
      }, 50);
    };

    container.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      container.removeEventListener("scroll", handleScroll);
      container.removeEventListener("scroll", updateActiveSectionFade);
      clearTimeout(scrollTimeout);
      scrollTriggersRef.current.forEach((trigger) => trigger.kill());
      scrollTriggersRef.current = [];
      sectionRefs.current.clear();
    };
  }, [sectionIds, onActiveChange]);

  return {
    scrollContainerRef,
    sectionRefs,
  };
}
