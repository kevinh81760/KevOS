import { useState, useEffect, useRef } from 'react';

/**
 * useScrollDirection Hook
 * 
 * Tracks scroll direction (up/down) with throttling for performance.
 * Returns true when scrolling down, false when scrolling up or at top.
 * 
 * @returns boolean - true when scrolling down, false when scrolling up or at top
 */
export function useScrollDirection(): boolean {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;

      // Always show navbar at the top of the page
      if (scrollY === 0) {
        setIsScrollingDown(false);
        lastScrollY.current = scrollY;
        ticking = false;
        return;
      }

      // Determine scroll direction
      const scrollingDown = scrollY > lastScrollY.current;
      
      // Only update if direction changed
      setIsScrollingDown(scrollingDown);
      lastScrollY.current = scrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    // Set initial scroll position
    lastScrollY.current = window.scrollY;

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isScrollingDown;
}
