import BubbleFade from "@/components/animations/BubbleFade";
import HoverScale from "@/components/animations/HoverScale";
import Image from "next/image";

interface FeaturedProjectCardProps {
  name: string;
  description: string;
  image: string;
  url?: string;
  delay?: number;
}

export default function FeaturedProjectCard({
  name,
  description,
  image,
  url,
  delay = 0.4,
}: FeaturedProjectCardProps) {
  const cardContent = (
    <div className="group relative overflow-hidden bg-[#111111] border border-[#242424] hover:border-[#2a2a2a] transition-colors">
      {/* Image */}
      <div className="relative h-[400px] w-full">
        <Image
          src={image}
          alt={`${name} Project`}
          fill
          className="object-cover"
        />
      </div>
      
      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        <p className="text-zinc-400 text-sm uppercase tracking-wide" style={{ fontFamily: 'Eurostile, sans-serif' }}>{description}</p>
      </div>
    </div>
  );

  return (
    <BubbleFade delay={delay} duration={1} scrollTrigger={true} repeatOnScroll={true}>
      <HoverScale scale={1.02} duration={0.5}>
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            {cardContent}
          </a>
        ) : (
          cardContent
        )}
      </HoverScale>
    </BubbleFade>
  );
}
