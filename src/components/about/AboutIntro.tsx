"use client";

import Image from "next/image";
import BubbleFade from "@/components/animations/BubbleFade";
import ScrollFade from "@/components/animations/ScrollFade";

export default function AboutIntro() {
  return (
    <div className="mt-10 mb-20 flex flex-col md:flex-row gap-8 md:gap-12 items-start">
      {/* Text content on the left */}
      <div className="flex-1 text-white px-2 flex flex-col md:h-[650px] justify-between font-[family-name:var(--font-inter)]">
        <div>
          <ScrollFade startFade={100} endFade={500}>
            <BubbleFade delay={0.1} duration={0.7}>
              <h2 className="text-4xl font-black text-white tracking-tighter mb-4" style={{ fontWeight: 600, letterSpacing: '-0.01em' }}>ABOUT ME</h2>
            </BubbleFade>
          </ScrollFade>
          <ScrollFade startFade={100} endFade={500}>
            <BubbleFade delay={0.2} duration={0.7}>
              <p className="text-zinc-100 text-2xl leading-relaxed tracking-wide font-medium">
                I'm a Computer Science student at San José State University who enjoys building software and taking time to reset through long drives to Bay Area viewpoints. I drive a Mercedes C250 Coupe, and those quiet drives help me think clearly and stay creative outside of code. I also prioritize staying healthy through the gym, which keeps me disciplined, focused, and balanced in both life and work.
              </p>
            </BubbleFade>
          </ScrollFade>
        </div>
      </div>

      {/* Headshot image on the right */}
      <BubbleFade delay={0} duration={0.7} className="shrink-0 w-full md:w-auto flex flex-col">
        <ScrollFade startFade={100} endFade={500}>
          <div className="relative w-full md:w-[500px] md:h-[650px] aspect-square overflow-hidden bg-[#111111]">
            <Image
              src="/headshot.jpg"
              alt="Headshot"
              fill
              className="object-cover"
            />
          </div>
        </ScrollFade>
      </BubbleFade>
    </div>
  );
}
