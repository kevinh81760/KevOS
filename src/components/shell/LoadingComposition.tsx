"use client";

import { AbsoluteFill, useCurrentFrame, Sequence } from "remotion";
import { KevOSTitle } from "@/components/animations/KevOSTitle";
import { BarcodeGlitch } from "@/components/animations/BarcodeGlitch";
import { GlitchScreen } from "@/components/animations/GlitchScreen";

// Timeline configuration at 30 FPS:
// - KevOSTitle: frames 0-30 (1s)
// - BarcodeGlitch: frames 30-90 (2s)
// - Loading text: frames 90-120 (1s)
// - Black screen: frames 120-150 (1s)
// - GlitchScreen: frames 150-165 (0.5s)
// - Final black: frames 165-170 (buffer to prevent flash)

export const FPS = 30;
export const DURATION_IN_FRAMES = 170; // Extra frames for clean ending

// Loading text component with reveal animation
const LoadingText = () => {
  const frame = useCurrentFrame();
  
  // Animate from bottom to center over ~18 frames (0.6s)
  const animationDuration = 18;
  const progress = Math.min(frame / animationDuration, 1);
  // Easing function similar to [0.22, 1, 0.36, 1]
  const eased = 1 - Math.pow(1 - progress, 3);
  
  const translateY = (1 - eased) * 100;
  
  return (
    <div 
      className="w-full h-full flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#000000" }}
    >
      <div style={{ transform: `translateY(${translateY}%)` }}>
        <span 
          className="text-3xl font-black tracking-tighter uppercase text-white"
          style={{ display: "block" }}
        >
          loading
        </span>
      </div>
    </div>
  );
};

// Black screen component
const BlackScreen = () => {
  return (
    <div 
      className="w-full h-full"
      style={{ backgroundColor: "#000000" }}
    />
  );
};

export const LoadingComposition = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#000000" }}>
      {/* KevOSTitle: 0-30 frames (1s) */}
      <Sequence from={0} durationInFrames={30}>
        <KevOSTitle />
      </Sequence>

      {/* BarcodeGlitch: 30-90 frames (2s) */}
      <Sequence from={30} durationInFrames={60}>
        <BarcodeGlitch />
      </Sequence>

      {/* Loading text: 90-120 frames (1s) */}
      <Sequence from={90} durationInFrames={30}>
        <LoadingText />
      </Sequence>

      {/* Black screen: 120-150 frames (1s) */}
      <Sequence from={120} durationInFrames={30}>
        <BlackScreen />
      </Sequence>

      {/* Final black screen to prevent any flash at animation end */}
      <Sequence from={155} durationInFrames={4}>
        <BlackScreen />
      </Sequence>
    </AbsoluteFill>
  );
};
