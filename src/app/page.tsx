import HeroAnimation from "@/components/animations/HeroAnimation";
import GitHubCalendar from "@/components/github/GitHubCalendar";
import HomeIntro from "@/components/home/HomeIntro";
import SelectedWorks from "@/components/home/SelectedWorks";

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <HeroAnimation />
      <div className="absolute top-[calc(90vh-4in)] left-1/2 -translate-x-1/2 w-full px-6 flex justify-center">
        <GitHubCalendar />
      </div>
      
      <div className="relative w-full">
        <HomeIntro />
        <SelectedWorks />
      </div>
    </div>
  );
}
