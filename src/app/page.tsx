import HeroAnimation from "@/components/animations/HeroAnimation";
import GitHubCalendar from "@/components/github/GitHubCalendar";
import HomeIntro from "@/components/home/HomeIntro";
import SelectedWorks from "@/components/home/SelectedWorks";
import ScrollFade from "@/components/animations/ScrollFade";
import LayoutContainer from "@/components/layout/LayoutContainer";

export default function HomePage() {
  return (
    <LayoutContainer className="relative min-h-screen">
      <HeroAnimation />
      <ScrollFade startFade={200} endFade={450} className="absolute top-[calc(90vh-360px)] left-1/2 -translate-x-1/2 w-full flex justify-center px-(--page-gutter-x)">
        <div className="w-(--hero-band-width)">
          <GitHubCalendar />
        </div>
      </ScrollFade>

      <div className="relative w-full">
        <HomeIntro />
        <SelectedWorks />
      </div>
    </LayoutContainer>
  );
}
