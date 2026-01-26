"use client";

import { useState, useEffect } from "react";

export default function NavClock() {
  const [time, setTime] = useState<string>("");
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="text-[20px] text-neutral-400 font-medium tabular-nums">
      {mounted ? time : ""}
    </span>
  );
}
