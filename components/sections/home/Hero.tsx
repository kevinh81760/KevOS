import Link from "next/link";
import type { HomeContent } from "@/lib/types";

interface HeroProps {
  content: HomeContent;
}

export default function Hero({ content }: HeroProps) {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-4 py-16">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
          {content.name}
        </h1>
        <h2 className="mb-4 text-2xl font-semibold text-gray-600 md:text-3xl lg:text-4xl">
          {content.title}
        </h2>
        {content.subtitle && (
          <p className="mb-6 text-lg text-gray-500 md:text-xl">
            {content.subtitle}
          </p>
        )}
        <p className="mb-8 text-base leading-relaxed text-gray-700 md:text-lg">
          {content.description}
        </p>
        {content.cta && (
          <div className="flex flex-wrap justify-center gap-4">
            {content.cta.primary && (
              <Link
                href={content.cta.primary.link}
                className="rounded-lg bg-black px-6 py-3 text-white transition-colors hover:bg-gray-800"
              >
                {content.cta.primary.text}
              </Link>
            )}
            {content.cta.secondary && (
              <Link
                href={content.cta.secondary.link}
                className="rounded-lg border-2 border-black px-6 py-3 text-black transition-colors hover:bg-gray-100"
              >
                {content.cta.secondary.text}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
