"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Player } from "@remotion/player";
import { useLoading } from "@/components/providers/LoadingProvider";
import { LoadingComposition, FPS, DURATION_IN_FRAMES } from "./LoadingComposition";

export default function SplashScreen() {
  const [mounted, setMounted] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const { isLoading, setIsLoading } = useLoading();

  useEffect(() => {
    // Use setTimeout to avoid synchronous setState in effect
    setTimeout(() => setMounted(true), 0);
  }, []);

  // Get window dimensions for the player
  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const hasSeenLoader = typeof window !== "undefined" && sessionStorage.getItem("kevos_loaded");

    if (hasSeenLoader) {
      setIsLoading(false);
      return;
    }

    // Total duration: 195 frames at 30 FPS = 6.5 seconds
    // Start fade out slightly before the end
    const totalDurationMs = (DURATION_IN_FRAMES / FPS) * 1000;

    // Start fade-out at the end of the animation
    const fadeOutTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, totalDurationMs);

    // Hide loading and reveal UI after fade completes
    const doneTimer = setTimeout(() => {
      if (typeof window !== "undefined") {
        sessionStorage.setItem("kevos_loaded", "true");
      }
      setIsLoading(false);
    }, totalDurationMs + 300); // Add 300ms for fade transition

    return () => {
      clearTimeout(fadeOutTimer);
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
        duration: 0.3,
        ease: "easeOut",
      }}
    >
      {/* Hide the Player once fade starts to prevent any flash */}
      {!isFadingOut && (
        <Player
          component={LoadingComposition}
          durationInFrames={DURATION_IN_FRAMES}
          fps={FPS}
          compositionWidth={dimensions.width}
          compositionHeight={dimensions.height}
          style={{
            width: "100%",
            height: "100%",
          }}
          autoPlay
          controls={false}
          loop={false}
        />
      )}
    </motion.div>
  );
}
