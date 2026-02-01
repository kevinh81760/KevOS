import { useState } from 'react';

/**
 * useHasAnimationPlayed Hook
 * 
 * Synchronously checks sessionStorage to determine if the hero animation
 * has already played in this browser session. Uses lazy initialization to
 * check before the first render, preventing animation replay on navigation.
 * 
 * @param storageKey - The sessionStorage key to check (default: 'hero-animation-played')
 * @returns boolean - true if animation has already played, false otherwise
 */
export function useHasAnimationPlayed(storageKey: string = 'hero-animation-played'): boolean {
  const [hasPlayed] = useState(() => {
    // During SSR, window is undefined, so return false
    if (typeof window === 'undefined') return false;
    
    // Synchronously check sessionStorage before first render
    return sessionStorage.getItem(storageKey) === 'true';
  });

  return hasPlayed;
}
