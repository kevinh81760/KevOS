"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLoading } from "@/components/providers/LoadingProvider";
import TextReveal from "@/components/animations/TextReveal";

export default function SplashScreen() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
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

    // Start fade-out animation after loading text finishes
    const fadeOutTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 4400); // 1200ms delay + 3200ms loading text duration

    // Hide loading and reveal UI
    const doneTimer = setTimeout(() => {
      if (typeof window !== "undefined") {
        sessionStorage.setItem("kevos_loaded", "true");
      }
      setVisible(false);
      setIsLoading(false);
    }, 4420); // 4400ms + 20ms delay

    return () => {
      clearTimeout(showTimer);
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
    </motion.div>
  );
}
