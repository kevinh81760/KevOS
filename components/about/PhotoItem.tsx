"use client";

import HoverScale from "@/components/animations/HoverScale";
import Image from "next/image";

interface PhotoItemProps {
  index: number;
  src?: string | null;
}

export default function PhotoItem({ index, src }: PhotoItemProps) {
  // Photos 1 and 4 (indices 0, 3) need images moved up 45px, photo 6 (index 5) stays at 30px
  let imageStyle: { objectPosition: string } | undefined;
  if (index === 0 || index === 3) {
    // Photos 1 and 4: 45px offset (30px + 15px additional)
    imageStyle = { objectPosition: 'center calc(50% - 55px)' };
  } else if (index === 5) {
    // Photo 6: 30px offset (keep current)
    imageStyle = { objectPosition: 'center calc(50% - 30px)' };
  }

  return (
    <HoverScale scale={1.02} duration={.5}>
      <div className="relative aspect-[4/4] rounded-lg overflow-hidden bg-[#111111] transition-colors">
        {src ? (
          <Image
            src={src}
            alt={`Gallery photo ${index + 1}`}
            fill
            className="object-cover"
            style={imageStyle}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
            <div className="absolute inset-0 bg-zinc-800/50"></div>
            <span className="text-zinc-500 text-xs uppercase tracking-wide">Photo {index + 1}</span>
          </div>
        )}
      </div>
    </HoverScale>
  );
}
