"use client";

import HoverScale from "@/components/animations/HoverScale";
import Image from "next/image";

interface BookItemProps {
  index: number;
  src?: string | null;
  title?: string;
}

export default function BookItem({ index, src, title }: BookItemProps) {
  const bookTitle = title || `Book ${index + 1}`;
  
  // Pragmatic Programmer (index 2) needs image shifted to the right
  let imageStyle: { objectPosition: string } | undefined;
  if (index === 2) {
    imageStyle = { objectPosition: 'calc(50% + 20px) center' };
  }

  return (
    <HoverScale scale={1.02} duration={0.5}>
      <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-[#111111] transition-colors">
        {src ? (
          <Image
            src={src}
            alt={bookTitle}
            fill
            className="object-cover"
            style={imageStyle}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
            <div className="absolute inset-0 bg-zinc-800/50"></div>
            <span className="text-zinc-500 text-xs uppercase tracking-wide">{bookTitle}</span>
          </div>
        )}
      </div>
    </HoverScale>
  );
}
