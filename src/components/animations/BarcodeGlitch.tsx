"use client";

import { useCurrentFrame, useVideoConfig } from "remotion";
import { useEffect, useRef } from "react";

export const BarcodeGlitch = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Barcode covers half the screen (centered)
  const barcodeWidth = width * 0.6;
  const barcodeHeight = height * 0.5;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = barcodeWidth;
    canvas.height = barcodeHeight;

    // Pseudo-random function
    const random = (seed: number) => {
      const x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    };

    // Flicker effect - randomly hide/show or distort
    const flickerSeed = random(frame * 0.3);
    const isVisible = flickerSeed > 0.15; // 85% visible, 15% hidden for flicker
    const glitchIntensity = random(frame * 0.5);

    // Clear canvas
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (!isVisible) return;

    // Barcode data encoding (simplified EAN-13 pattern for "780198601838")
    // Using alternating bar patterns that look like a real barcode
    const barcodePattern = [
      // Start guard
      1, 0, 1,
      // Left digits (7 8 0 1 9 8)
      0, 1, 1, 1, 0, 1, 0, // 7
      0, 1, 1, 0, 0, 1, 1, // 8
      0, 0, 0, 0, 1, 0, 1, // 0
      0, 0, 1, 1, 0, 0, 1, // 1
      0, 0, 0, 1, 0, 1, 1, // 9
      0, 1, 1, 0, 0, 1, 1, // 8
      // Center guard
      0, 1, 0, 1, 0,
      // Right digits (6 0 1 8 3 8)
      1, 0, 1, 0, 0, 0, 0, // 6
      1, 1, 1, 0, 0, 1, 0, // 0
      1, 1, 0, 0, 1, 1, 0, // 1
      1, 0, 0, 1, 0, 0, 0, // 8
      1, 0, 0, 0, 0, 1, 0, // 3
      1, 0, 0, 1, 0, 0, 0, // 8
      // End guard
      1, 0, 1,
    ];

    // Calculate bar dimensions
    const totalBars = barcodePattern.length;
    const barWidth = (canvas.width * 0.8) / totalBars;
    const startX = canvas.width * 0.1;
    const barHeight = canvas.height * 0.65;
    const barY = canvas.height * 0.1;

    // Draw barcode bars with glitch effects
    ctx.fillStyle = "#ffffff";

    for (let i = 0; i < barcodePattern.length; i++) {
      if (barcodePattern[i] === 1) {
        let x = startX + i * barWidth;
        let w = barWidth;
        let h = barHeight;
        let y = barY;

        // Add horizontal displacement glitch
        if (glitchIntensity > 0.7 && random(frame + i) > 0.8) {
          x += (random(frame * i) - 0.5) * 20;
        }

        // Add vertical slice glitch
        if (glitchIntensity > 0.6 && random(frame * 0.1 + i) > 0.9) {
          const sliceOffset = (random(frame + i * 2) - 0.5) * 30;
          y += sliceOffset;
        }

        // Add thickness variation glitch
        if (glitchIntensity > 0.8 && random(frame * 0.2 + i) > 0.85) {
          w *= 1 + (random(frame + i * 3) - 0.5) * 0.5;
        }

        ctx.fillRect(x, y, w, h);
      }
    }

    // Draw barcode number below
    const fontSize = canvas.height * 0.08;
    ctx.font = `${fontSize}px monospace`;
    ctx.textAlign = "center";
    ctx.textBaseline = "top";

    // Add text glitch effect
    const textGlitch = random(frame * 0.4);
    let displayText = "780198601838";

    if (textGlitch > 0.85) {
      // Corrupt some characters
      const chars = displayText.split("");
      for (let i = 0; i < chars.length; i++) {
        if (random(frame + i * 10) > 0.7) {
          chars[i] = String.fromCharCode(
            48 + Math.floor(random(frame + i * 20) * 10)
          );
        }
      }
      displayText = chars.join("");
    }

    const textY = barY + barHeight + canvas.height * 0.03;

    // Text displacement glitch
    let textX = canvas.width / 2;
    if (textGlitch > 0.9) {
      textX += (random(frame * 2) - 0.5) * 30;
    }

    ctx.fillText(displayText, textX, textY);

    // Add scanline effect
    ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
    for (let y = 0; y < canvas.height; y += 4) {
      if (random(y + frame * 0.1) > 0.5) {
        ctx.fillRect(0, y, canvas.width, 2);
      }
    }

    // Add horizontal glitch bands
    if (glitchIntensity > 0.5) {
      const numBands = Math.floor(random(frame) * 5) + 1;
      for (let b = 0; b < numBands; b++) {
        const bandY = random(frame + b * 100) * canvas.height;
        const bandHeight = random(frame + b * 200) * 20 + 5;
        const offset = (random(frame + b * 300) - 0.5) * 50;

        // Copy and offset a horizontal slice
        const imageData = ctx.getImageData(0, bandY, canvas.width, bandHeight);
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, bandY, canvas.width, bandHeight);
        ctx.putImageData(imageData, offset, bandY);
      }
    }

    // Add noise overlay
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      const noise = (random(i + frame * 0.5) - 0.5) * 30;
      if (random(i + frame) > 0.95) {
        // Random noise pixels
        data[i] = Math.min(255, Math.max(0, data[i] + noise));
        data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise));
        data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise));
      }
    }
    ctx.putImageData(imageData, 0, 0);
  }, [frame, barcodeWidth, barcodeHeight]);

  // Additional flicker using opacity
  const random = (seed: number) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };
  const opacityFlicker = random(frame * 0.7) > 0.1 ? 1 : 0.3;

  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      style={{ backgroundColor: "#000000" }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: `${barcodeWidth}px`,
          height: `${barcodeHeight}px`,
          opacity: opacityFlicker,
          filter: random(frame * 0.2) > 0.9 ? "blur(1px)" : "none",
        }}
      />
    </div>
  );
};
