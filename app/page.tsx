import HeroAnimation from "@/components/animations/HeroAnimation";
import GitHubCalendar from "@/components/github/GitHubCalendar";
import FadeIn from "@/components/animations/FadeIn";
import HoverScale from "@/components/animations/HoverScale";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <HeroAnimation />
      <div className="absolute top-[calc(90vh-2.5in)] left-1/2 -translate-x-1/2 w-full px-6 flex justify-center">
        <GitHubCalendar />
      </div>
      
      {/* Additional content sections for scroll testing */}
      <div className="relative w-full">
        {/* Section 1 */}
        <section className="min-h-[80vh] flex items-center justify-center px-6 py-20 pt-70">
          <FadeIn className="text-center max-w-4xl" delay={0.2} duration={0.8}>
            <p className="text-zinc-100 text-2xl leading-loose tracking-wide font-medium">
              I'm a Product Engineer at 24Labs, where I'm building consumer apps and internal analytics tools. As a full-stack developer, I build end-to-end solutions. I thrive on fast-paced cycle of development, deployment, and iteration that drives real product impact.
            </p>
          </FadeIn>
        </section>
        
        {/* Section 2 */}
        <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-20 pt-60 mt-65">
          <FadeIn className="text-center mb-24" delay={0.2} duration={0.8}>
            <h2 className="text-7xl font-black text-white tracking-tighter" style={{ fontWeight: 900, letterSpacing: '-0.05em' }}>SELECTED WORKS</h2>
          </FadeIn>
          
          <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
            {/* Project Card 1 */}
            <FadeIn delay={0.4} duration={0.8}>
              <HoverScale scale={1.02} duration={0.5}>
                <a
                  href="https://pointpal.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="group relative rounded-lg overflow-hidden bg-[#111111] border border-[#242424] hover:border-[#2a2a2a] transition-colors">
                    {/* Image */}
                    <div className="relative h-[400px] w-full">
                      <Image
                        src="/pointpal.png"
                        alt="PointPal Project"
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    {/* Project Info */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">PointPal</h3>
                      <p className="text-zinc-400 text-sm uppercase tracking-wide">AI Travel Platform</p>
                    </div>
                  </div>
                </a>
              </HoverScale>
            </FadeIn>

            {/* Project Card 2 */}
            <FadeIn delay={0.6} duration={0.8}>
              <HoverScale scale={1.02} duration={0.5}>
                <div className="group relative rounded-lg overflow-hidden bg-[#111111] border border-[#242424] hover:border-[#2a2a2a] transition-colors">
                  {/* Image Placeholder */}
                  <div className="relative h-[400px] bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                    <div className="absolute inset-0 bg-zinc-800/50"></div>
                    <span className="text-zinc-500 text-sm uppercase tracking-wide">Project Image</span>
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">PROJECT TITLE</h3>
                    <p className="text-zinc-400 text-sm uppercase tracking-wide">CATEGORY | 2024</p>
                  </div>
                </div>
              </HoverScale>
            </FadeIn>
          </div>

          {/* See all work link */}
          <FadeIn delay={0.8} duration={0.8} className="mt-8">
            <a href="#" className="text-white text-lg hover:text-zinc-400 transition-colors">
              See all work →
            </a>
          </FadeIn>
        </section>
      </div>
    </div>
  );
}
