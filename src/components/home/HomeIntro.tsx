import ScrollFadeInOut from "@/components/animations/ScrollFadeInOut";

export default function HomeIntro() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 pt-90">
      <ScrollFadeInOut 
        fadeInStart={600} 
        fadeInEnd={900} 
        fadeOutStart={1300} 
        fadeOutEnd={1700} 
        className="text-center max-w-4xl"
      >
        <p className="text-zinc-100 text-2xl leading-loose tracking-wide font-medium mb-30">
          I&apos;m a Product Engineer at 24Labs, where I&apos;m building consumer apps and internal analytics tools. As a full-stack developer, I build end-to-end solutions. I thrive on fast-paced cycle of development, deployment, and iteration that drives real product impact.
        </p>
      </ScrollFadeInOut>
    </section>
  );
}
