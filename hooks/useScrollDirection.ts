"use client";

import { useState, useEffect } from "react";

interface UseScrollDirectionReturn {
  isScrollingDown: boolean;
  scrollY: number;
  isAtTop: boolean;
}

/**
 * Custom hook to track scroll direction and position
 * Returns scroll state for implementing hide/show navbar behavior
 */
export function useScrollDirection(): UseScrollDirectionReturn {
  const [scrollY, setScrollY] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      
      setScrollY(currentScrollY);
      setIsAtTop(currentScrollY === 0);
      
      // Only update direction if scroll position changed significantly
      // This prevents jittery behavior on small scroll movements
      if (Math.abs(currentScrollY - lastScrollY) > 5) {
        setIsScrollingDown(currentScrollY > lastScrollY);
        lastScrollY = currentScrollY;
      }
      
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    // Set initial state
    updateScrollDirection();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return { isScrollingDown, scrollY, isAtTop };
}
