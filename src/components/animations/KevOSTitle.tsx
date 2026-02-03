"use client";

import { useVideoConfig } from "remotion";

export const KevOSTitle = () => {
  const { width, height } = useVideoConfig();

  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      style={{
        backgroundColor: "#000000",
      }}
    >
      <div
        style={{
          fontSize: `${Math.min(width, height) * 0.2}px`,
          fontWeight: "300",
          color: "#ffffff",
          fontFamily: "Bjork, bjork, sans-serif",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        KevOS
      </div>
    </div>
  );
};
