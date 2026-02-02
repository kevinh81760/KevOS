"use client";

import Image from "next/image";
import BubbleFade from "@/components/animations/BubbleFade";

export default function AboutIntro() {
  return (
    <div className="mt-10 mb-50 flex flex-col md:flex-row gap-8 md:gap-12 items-start">
      {/* Text content on the left */}
      <div className="flex-1 text-white px-2 flex flex-col md:h-[650px] justify-between">
        <div>
          <BubbleFade delay={0.1} duration={0.7}>
            <h2 className="text-4xl font-black text-white tracking-tighter mb-4" style={{ fontWeight: 600, letterSpacing: '-0.01em' }}>ABOUT ME</h2>
          </BubbleFade>
          <BubbleFade delay={0.2} duration={0.7}>
            <p className="text-zinc-100 text-2xl leading-relaxed tracking-wide font-medium">
              When I'm not locked into coding and designing all day, I enjoy going to the gym, driving through the Bay Area, and stopping at viewpoints along the way. My favorite streatch of the road is skyline where I go to ponder and clear my head.
            </p>
          </BubbleFade>
        </div>
        <div>
          <BubbleFade delay={0.3} duration={0.7}>
            <h1 className="text-4xl font-black text-white tracking-tighter mb-4" style={{ fontWeight: 600, letterSpacing: '-0.01em' }}>
              ARCHIVE
            </h1>
          </BubbleFade>
          <BubbleFade delay={0.4} duration={0.7}>
            <p className="text-zinc-100 text-2xl leading-relaxed tracking-wide font-medium">
              Photos captured along the way
            </p>
          </BubbleFade>
        </div>
      </div>

      {/* Headshot image on the right */}
      <BubbleFade delay={0} duration={0.7} className="shrink-0 w-full md:w-auto flex flex-col">
        <div className="relative w-full md:w-[500px] md:h-[650px] aspect-square overflow-hidden bg-[#111111]">
          <Image
            src="/headshot.jpg"
            alt="Headshot"
            fill
            className="object-cover"
          />
        </div>
      </BubbleFade>
    </div>
  );
}
