import FadeIn from "@/components/animations/FadeIn";

export default function HomeIntro() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 pt-160">
      <FadeIn className="text-center max-w-4xl" delay={0} duration={0.8} scrollTrigger={true}>
        <p className="text-zinc-100 text-2xl leading-loose tracking-wide font-medium mb-40">
          I&apos;m a Product Engineer at 24Labs, where I&apos;m building consumer apps and internal analytics tools. As a full-stack developer, I build end-to-end solutions. I thrive on fast-paced cycle of development, deployment, and iteration that drives real product impact.
        </p>
      </FadeIn>
    </section>
  );
}
