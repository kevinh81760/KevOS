import HeroAnimation from "@/components/animations/HeroAnimation";
import GitHubCalendar from "@/components/github/GitHubCalendar";
import HomeIntro from "@/components/home/HomeIntro";
import SelectedWorks from "@/components/home/SelectedWorks";
import ScrollFade from "@/components/animations/ScrollFade";

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <HeroAnimation />
      <ScrollFade startFade={200} endFade={450} className="absolute top-[calc(90vh-4in)] left-1/2 -translate-x-1/2 w-full px-6 flex justify-center">
        <GitHubCalendar />
      </ScrollFade>
      
      <div className="relative w-full">
        <HomeIntro />
        <SelectedWorks />
      </div>
    </div>
  );
}
