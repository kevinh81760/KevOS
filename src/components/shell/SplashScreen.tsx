"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLoading } from "@/components/providers/LoadingProvider";
import TextReveal from "@/components/animations/TextReveal";
import { GlitchScreen } from "@/components/animations/GlitchScreen";

export default function SplashScreen() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [showGlitch, setShowGlitch] = useState(false);
  const [isGlitchFadingOut, setIsGlitchFadingOut] = useState(false);
  const { isLoading, setIsLoading } = useLoading();

  useEffect(() => {
    // Use setTimeout to avoid synchronous setState in effect
    setTimeout(() => setMounted(true), 0);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const hasSeenLoader = typeof window !== "undefined" && sessionStorage.getItem("kevos_loaded");

    if (hasSeenLoader) {
      setIsLoading(false);
      return;
    }

    // Brief delay before showing loading text (black screen first)
    const showTimer = setTimeout(() => {
      setVisible(true);
    }, 1200);

    // Show GlitchScreen right after loading text finishes
    const showGlitchTimer = setTimeout(() => {
      setVisible(false); // Hide loading text when glitch appears
      setShowGlitch(true);
    }, 4420); // 1200ms delay + 3200ms loading text duration + 20ms

    // Start fade-out animation after GlitchScreen disappears
    const fadeOutTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 5420); // 5420ms (glitch disappears instantly)

    // Start GlitchScreen fade-out after 1 second of play
    const glitchFadeOutTimer = setTimeout(() => {
      setIsGlitchFadingOut(true);
    }, 5420); // 4420ms + 1000ms (1 second)

    // Hide loading and reveal UI after glitch disappears + short delay
    const doneTimer = setTimeout(() => {
      if (typeof window !== "undefined") {
        sessionStorage.setItem("kevos_loaded", "true");
      }
      setShowGlitch(false);
      setIsLoading(false);
    }, 5720); // 5420ms (glitch disappears) + 300ms (short delay)

    return () => {
      clearTimeout(showTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(showGlitchTimer);
      clearTimeout(glitchFadeOutTimer);
      clearTimeout(doneTimer);
    };
  }, [mounted, setIsLoading]);

  // Return null during SSR, before mount, or when loading is complete
  if (typeof window === "undefined" || !mounted || !isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-9999 flex items-center justify-center pointer-events-none bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: isFadingOut ? 0 : 1 }}
      transition={{
        duration: 0.02, // 20ms fade-out duration
        ease: "easeOut",
      }}
    >
      {visible && (
        <TextReveal direction="up">
          <span className="text-3xl font-black tracking-tighter uppercase text-white">
            loading
          </span>
        </TextReveal>
      )}
      {showGlitch && !isGlitchFadingOut && (
        <div className="absolute inset-0 w-full h-full z-10">
          <GlitchScreen />
        </div>
      )}
    </motion.div>
  );
}
