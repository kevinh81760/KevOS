"use client";

import PhotoGrid from "@/components/about/PhotoGrid";
import AboutIntro from "@/components/about/AboutIntro";
import BubbleFade from "@/components/animations/BubbleFade";
import ViewportScrollFade from "@/components/animations/ViewportScrollFade";

export default function GalleryPage() {
  return (
    <div className="min-h-[calc(100vh-100px)] px-6 pt-[30px] pb-20">
      <div className="max-w-7xl mx-auto ml-[87px] mr-[87px]">
        <AboutIntro />
        
        <div className="px-2 mb-8 mt-70">
          <ViewportScrollFade>
            <BubbleFade scrollTrigger delay={0} duration={0.9} scaleFrom={0.95}>
              <h1 className="text-4xl font-black text-white tracking-tighter mb-4" style={{ fontWeight: 600, letterSpacing: '-0.01em', fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                ARCHIVE
              </h1>
            </BubbleFade>
          </ViewportScrollFade>
        </div>

        <div className="">
          <ViewportScrollFade>
            <BubbleFade scrollTrigger delay={0.1} duration={0.9} scaleFrom={0.95}>
              <PhotoGrid />
            </BubbleFade>
          </ViewportScrollFade>
        </div>
      </div>
    </div>
  );
}
