import ScrollFadeInOut from "@/components/animations/ScrollFadeInOut";

export default function HomeIntro() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-(--content-padding-x) pt-(--spacing-hero-intro)">
      <ScrollFadeInOut 
        fadeInStart={0.2} 
        fadeInEnd={0.4} 
        fadeOutStart={0.6} 
        fadeOutEnd={0.8} 
        className="text-center max-w-4xl"
      >
        <p className="text-zinc-100 text-2xl leading-loose tracking-wide font-medium mb-(--spacing-intro-mb)" style={{ fontFamily: "Akzidenz-Grotesk, Helvetica Neue, sans-serif" }}>
          I&apos;m a Product Engineer at 24Labs, where I&apos;m building consumer apps and internal analytics tools. As a full-stack developer, I build end-to-end solutions. I thrive on fast-paced cycle of development, deployment, and iteration that drives real product impact.
        </p>
      </ScrollFadeInOut>
    </section>
  );
}
