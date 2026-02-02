"use client";

import Image from "next/image";

export default function AboutIntro() {
  return (
    <div className="mt-10 mb-50 flex flex-col md:flex-row gap-8 md:gap-12 items-start">
      {/* Text content on the left */}
      <div className="flex-1 text-white px-2 flex flex-col md:h-[650px] justify-between">
        <div>
          <h2 className="text-4xl font-black text-white tracking-tighter mb-4" style={{ fontWeight: 600, letterSpacing: '-0.01em' }}>ABOUT ME</h2>
          <p className="text-zinc-100 text-2xl leading-relaxed tracking-wide font-medium">
          When I'm not locked into coding and designing all day, I enjoy going to the gym, driving through the Bay Area, and stopping at viewpoints along the way. My favorite streatch of the road is skyline where I go to ponder and clear my head.
          </p>
        </div>
        <div>
          <h1 className="text-4xl font-black text-white tracking-tighter mb-4" style={{ fontWeight: 600, letterSpacing: '-0.01em' }}>
            ARCHIVE
          </h1>
          <p className="text-zinc-100 text-2xl leading-relaxed tracking-wide font-medium">
            Long drives, quiet viewpoints, and places with a little space to think
          </p>
        </div>
      </div>

      {/* Headshot image on the right */}
      <div className="shrink-0 w-full md:w-auto flex flex-col">
        <div className="relative w-full md:w-[500px] md:h-[650px] aspect-square overflow-hidden bg-[#111111]">
          <Image
            src="/headshot.jpg"
            alt="Headshot"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
