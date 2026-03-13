"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import TextReveal from "./TextReveal";
import StarIcon from "@/components/icons/StarIcon";
import { useHasAnimationPlayed } from "@/lib/hooks/useHasAnimationPlayed";
import ScrollFade from "./ScrollFade";

export default function HeroAnimation() {
  // Synchronously check sessionStorage before first render
  const hasPlayed = useHasAnimationPlayed();
  const shouldAnimate = !hasPlayed;

  useEffect(() => {
    // Mark animation as played in sessionStorage when it starts
    if (shouldAnimate && typeof window !== 'undefined') {
      sessionStorage.setItem('hero-animation-played', 'true');
    }
  }, [shouldAnimate]);

  // Determine initial values based on whether animation should play
  const initialProps = shouldAnimate
    ? { scale: 0.3, top: "45%", y: "-50%" }
    : { scale: 1, top: "calc(16px)", y: 0 };

  const transitionProps = shouldAnimate
    ? {
        scale: { duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] },
        top: { duration: 1.5, delay: 1.5, ease: [0.22, 1, 0.36, 1] },
        y: { duration: 1.5, delay: 1.5, ease: [0.22, 1, 0.36, 1] },
      }
    : { duration: 0 };

  return (
    <div className="relative h-[calc(100vh-var(--navbar-height))] overflow-hidden">
      <motion.div
        className="absolute left-1/2 whitespace-nowrap"
        style={{ x: "-50%" }}
        initial={initialProps}
        animate={{ scale: 1, top: "calc(16px + 24px)", y: 0 }}
        transition={transitionProps}
      >
        <ScrollFade startFade={100} endFade={260}>
          <TextReveal direction="up" duration={0.8} skipAnimation={!shouldAnimate}>
            <h1
              className="font-bold text-white uppercase tracking-tight"
              style={{ fontSize: "var(--hero-title-size)" }}
            >
              KEVIN HA
            </h1>
          </TextReveal>
        </ScrollFade>
      </motion.div>
      <div className="absolute top-[calc(7.5rem+16px+2.5rem+2rem+24px)] left-0 w-full">
        <div className="relative mx-auto flex w-(--hero-band-width) items-center">
          <ScrollFade startFade={140} endFade={310} className="">
            <TextReveal delay={2.4} duration={0.4} direction="down" skipAnimation={!shouldAnimate}>
              <span
                className="text-white font-semibold tracking-wide"
                style={{ fontFamily: "Akzidenz-Grotesk, sans-serif", fontSize: "var(--hero-meta-size)" }}
              >
                Product Engineer
              </span>
            </TextReveal>
          </ScrollFade>
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
            <ScrollFade startFade={140} endFade={310}>
              <TextReveal delay={2.2} duration={0.4} direction="down" skipAnimation={!shouldAnimate}>
                <StarIcon size={32} />
              </TextReveal>
            </ScrollFade>
          </div>
          <ScrollFade startFade={140} endFade={310} className="ml-auto">
            <TextReveal delay={2.4} duration={0.4} direction="down" skipAnimation={!shouldAnimate}>
              <span
                className="text-white font-semibold tracking-wide"
                style={{ fontFamily: "Akzidenz-Grotesk, sans-serif", fontSize: "var(--hero-meta-size)" }}
              >
                San Francisco, CA
              </span>
            </TextReveal>
          </ScrollFade>
        </div>
      </div>
    </div>
  );
}
