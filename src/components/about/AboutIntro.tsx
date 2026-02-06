"use client";

import Image from "next/image";
import BubbleFade from "@/components/animations/BubbleFade";
import ScrollFade from "@/components/animations/ScrollFade";
import { Github, Linkedin, Twitter, ChevronRight } from "lucide-react";

export default function AboutIntro() {
  return (
    <div className="mt-10 mb-20 flex flex-col md:flex-row gap-8 md:gap-12 items-start">
      {/* Text content on the left */}
      <div className="flex-1 text-white px-2 flex flex-col md:h-[650px] justify-between font-[family-name:var(--font-inter)]">
        <div>
          <ScrollFade startFade={100} endFade={500}>
            <BubbleFade delay={0.1} duration={0.7}>
              <h1 className="text-[42px] font-black text-white tracking-tighter mb-4 pb-4 border-b border-dotted border-zinc-800" style={{ fontWeight: 600, letterSpacing: '-0.01em', fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>ABOUT ME</h1>
            </BubbleFade>
          </ScrollFade>
          <ScrollFade startFade={100} endFade={500}>
            <BubbleFade delay={0.2} duration={0.7}>
              <p className="text-zinc-100 text-2xl leading-relaxed tracking-wide font-medium mt-8" style={{ fontFamily: 'Akzidenz-Grotesk, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                I'm a Computer Science student at San José State University who enjoys building software and taking time to reset through long drives to Bay Area viewpoints. I drive a Mercedes C250 Coupe, and those quiet drives help me think clearly and stay creative outside of code. I also prioritize staying healthy through the gym, which keeps me disciplined, focused, and balanced in both life and work.
              </p>
            </BubbleFade>
          </ScrollFade>
        </div>
        
        {/* Social Media Buttons */}
        <div className="mt-4 md:mt-0">
          <ScrollFade startFade={100} endFade={500}>
            <BubbleFade delay={0.3} duration={0.5}>
              <div className="flex items-center gap-2 mb-3">
                <ChevronRight className="w-4 h-4 text-white" />
                <h2 className="text-base font-bold text-white tracking-tight font-[family-name:var(--font-geist-mono)]">LINKS</h2>
              </div>
            </BubbleFade>
          </ScrollFade>
          <ScrollFade startFade={100} endFade={500}>
            <BubbleFade delay={0.35} duration={0.5}>
              <div className="flex gap-3 pb-4 border-b border-dotted border-zinc-800">
                <ScrollFade startFade={100} endFade={500}>
              <BubbleFade delay={0.45} duration={0.5}>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-30 py-3 border border-zinc-700 hover:border-zinc-500 transition-all duration-200 group"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors duration-200" />
                </a>
              </BubbleFade>
            </ScrollFade>
            <ScrollFade startFade={100} endFade={500}>
              <BubbleFade delay={0.5} duration={0.5}>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-30 py-3 border border-zinc-700 hover:border-zinc-500 transition-all duration-200 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors duration-200" />
                </a>
              </BubbleFade>
            </ScrollFade>
            <ScrollFade startFade={100} endFade={500}>
              <BubbleFade delay={0.55} duration={0.5}>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-30 py-3 border border-zinc-700 hover:border-zinc-500 transition-all duration-200 group"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors duration-200" />
                </a>
              </BubbleFade>
              </ScrollFade>
              </div>
            </BubbleFade>
          </ScrollFade>
        </div>
      </div>

      {/* Headshot image on the right */}
      <BubbleFade delay={0} duration={0.7} className="shrink-0 w-full md:w-auto flex flex-col">
        <ScrollFade startFade={100} endFade={500}>
          <div className="relative w-full md:w-[500px] md:h-[570px] aspect-square overflow-hidden bg-[#111111] mt-19">
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
