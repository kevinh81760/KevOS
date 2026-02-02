"use client";

import { useEffect, useRef, useState } from "react";

interface GlitchScreenProps {
  width?: number;
  height?: number;
}

export const GlitchScreen = ({ width, height }: GlitchScreenProps = {}) => {
  const [frame, setFrame] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Get dimensions from props or window
  const [dimensions, setDimensions] = useState({
    width: width || (typeof window !== "undefined" ? window.innerWidth : 1920),
    height: height || (typeof window !== "undefined" ? window.innerHeight : 1080),
  });

  // Update dimensions on window resize
  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateDimensions = () => {
      setDimensions({
        width: width || window.innerWidth,
        height: height || window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [width, height]);

  // Animation frame counter
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = 0;

    const animate = (currentTime: number) => {
      if (currentTime - lastTime >= 16) {
        // ~60fps
        setFrame((prev) => prev + 1);
        lastTime = currentTime;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Glitch band dimensions (full width, positioned higher up)
  const glitchBandWidth = dimensions.width;
  const glitchBandHeight = dimensions.height * 0.06;
  const glitchBandX = 0;
  const glitchBandY = (dimensions.height - glitchBandHeight) / 2 - dimensions.height * 0.15;

  // Generate noise pattern
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = glitchBandWidth;
    canvas.height = glitchBandHeight;
    ctx.imageSmoothingEnabled = false;

    // Generate noise using frame as seed for animation
    const imageData = ctx.createImageData(canvas.width, canvas.height);
    const data = imageData.data;

    // Better pseudo-random function for retro feel
    const random = (seed: number) => {
      const x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    };

    // Add flickering/stuttering effect - some frames repeat or skip
    const flicker = Math.floor(random(frame * 0.1) * 3); // 0, 1, or 2
    const effectiveFrame = frame + flicker * 0.3;

    // Variable scroll speeds for different horizontal bands (retro TV effect)
    const scrollSpeed1 = effectiveFrame * 0.12;
    const scrollSpeed2 = effectiveFrame * 0.18;
    const scrollSpeed3 = effectiveFrame * 0.09;

    for (let i = 0; i < data.length; i += 4) {
      const x = (i / 4) % canvas.width;
      const y = Math.floor((i / 4) / canvas.width);

      // Multiple noise layers with different speeds for organic feel
      const baseNoise = random((x * 0.03 + y * 0.07 + effectiveFrame * 0.2) * 1000);
      const scrollNoise1 = random((x * 0.02 + scrollSpeed1 + y * 0.1) * 1000);
      const scrollNoise2 = random((x * 0.025 + scrollSpeed2 + y * 0.08) * 1000);
      const scrollNoise3 = random((x * 0.015 + scrollSpeed3 + y * 0.12) * 1000);

      // Combine multiple noise sources for more natural variation
      const combinedNoise =
        baseNoise * 0.4 + scrollNoise1 * 0.3 + scrollNoise2 * 0.2 + scrollNoise3 * 0.1;

      // Add horizontal scanline interference patterns
      const scanline = Math.sin((y + effectiveFrame * 0.5) * 0.8) * 0.15 + 0.85;
      const scanline2 = Math.sin((y * 2 + effectiveFrame * 0.3) * 1.2) * 0.1 + 0.9;

      // Add vertical interference bands
      const verticalBand = Math.sin((x + effectiveFrame * 0.4) * 0.05) * 0.2 + 0.8;

      // Combine all effects
      const finalNoise = combinedNoise * scanline * scanline2 * verticalBand;

      // Add occasional "glitch" moments - sudden changes
      const glitch = random((effectiveFrame * 0.05 + x * 0.001) * 1000);
      const glitchIntensity = glitch > 0.98 ? random(glitch * 1000) : finalNoise;

      // Create high-contrast black and white static with threshold
      const intensity = glitchIntensity > 0.5 ? 255 : 0;

      data[i] = intensity; // R
      data[i + 1] = intensity; // G
      data[i + 2] = intensity; // B
      data[i + 3] = 255; // A
    }

    ctx.putImageData(imageData, 0, 0);
  }, [frame, glitchBandWidth, glitchBandHeight]);

  return (
    <div className="relative w-full h-full" style={{ backgroundColor: "#000000" }}>
      {/* Glitch band with grain overlay - directly on black background */}
      <div
        className="absolute overflow-hidden"
        style={{
          left: `${glitchBandX}px`,
          top: `${glitchBandY}px`,
          width: `${glitchBandWidth}px`,
          height: `${glitchBandHeight}px`,
        }}
      >
        <canvas
          ref={canvasRef}
          className="w-full h-full"
          style={{
            mixBlendMode: "screen",
            opacity: 0.9,
          }}
        />
      </div>
    </div>
  );
};
