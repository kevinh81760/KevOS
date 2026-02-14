"use client";

import { useState, useRef } from "react";
import { experiences } from "@/components/experience/data";
import ExperienceSidebar from "@/components/experience/ExperienceSidebar";
import ExperienceContent from "@/components/experience/ExperienceContent";
import { LAYOUT } from "@/lib/constants/layout";

export default function ExperiencePage() {
  const [activeExperienceId, setActiveExperienceId] = useState(
    experiences[0]?.id || ""
  );
  const contentScrollRef = useRef<HTMLDivElement>(null);

  const handleCompanyClick = (id: string) => {
    const element = document.getElementById(id);
    const container = contentScrollRef.current;
    
    if (element && container) {
      const containerRect = container.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();
      const scrollTop = container.scrollTop;
      const relativeTop = elementRect.top - containerRect.top;
      
      // Calculate offset to align section title with sidebar indicator bar
      const sidebarBarTop = LAYOUT.SIDEBAR_TOP;
      const containerTop = containerRect.top; // Container position from viewport top
      const containerPaddingTop = 48; // pt-12 = 48px
      
      // Calculate where sidebar bar is relative to container top
      const sidebarBarRelativeToContainer = sidebarBarTop - containerTop;
      // To scroll down more, add a positive offset (flip the original calculation)
      // This will make the title appear lower - significantly increased offset value
      const scrollDownOffset = containerPaddingTop - sidebarBarRelativeToContainer - 43; // Increased from 48 to 100px to scroll down more
      
      const targetScroll = scrollTop + relativeTop + scrollDownOffset;
      
      container.scrollTo({
        top: Math.max(0, targetScroll), // Ensure we don't scroll above 0
        behavior: "smooth",
      });
    }
  };

  const handleActiveChange = (id: string) => {
    setActiveExperienceId(id);
  };

  return (
    <>
      {/* Left Sidebar - Fixed position */}
      <ExperienceSidebar
        experiences={experiences}
        activeId={activeExperienceId}
        onCompanyClick={handleCompanyClick}
      />

      {/* Page container */}
      <div className="h-[calc(100vh-var(--navbar-height))] overflow-hidden">
        <div className="h-full max-w-[var(--layout-max-width)] mx-auto">
          <div className="h-full flex pl-[var(--content-offset-experience)] pr-8">
            {/* Right Content - Scrollable container */}
            <ExperienceContent
              experiences={experiences}
              onActiveChange={handleActiveChange}
              scrollContainerRef={contentScrollRef}
            />
          </div>
        </div>
      </div>
    </>
  );
}
