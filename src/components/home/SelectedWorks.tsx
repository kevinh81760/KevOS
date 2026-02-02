import FadeIn from "@/components/animations/FadeIn";
import { projects } from "@/components/projects/data";
import FeaturedProjectCard from "./FeaturedProjectCard";
import Link from "next/link";

export default function SelectedWorks() {
  // Filter to show only featured projects (PointPal and ViralEngine)
  const featuredProjects = projects.filter(
    (project) => project.id === "pointpal" || project.id === "viral-engine"
  );

  // Map project type to display description
  const getProjectDescription = (project: typeof projects[0]) => {
    if (project.id === "pointpal") return "AI Travel Platform";
    if (project.id === "viral-engine") return "UGC Platform";
    return project.type;
  };

  // Get project URL if available
  const getProjectUrl = (project: typeof projects[0]) => {
    if (project.id === "pointpal") return "https://pointpal.ai";
    return undefined;
  };

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-20 pt-60 mt-65">
      <FadeIn className="text-center mb-24" delay={0} duration={0.8} scrollTrigger={true}>
        <h2 className="text-7xl font-black text-white tracking-tighter" style={{ fontWeight: 900, letterSpacing: '-0.05em' }}>
          SELECTED WORKS
        </h2>
      </FadeIn>
      
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
        {featuredProjects.map((project, index) => (
          <FeaturedProjectCard
            key={project.id}
            name={project.name.replace(".exe", "")}
            description={getProjectDescription(project)}
            image={project.image}
            url={getProjectUrl(project)}
            delay={0.4 + index * 0.2}
          />
        ))}
      </div>

      {/* See all work link */}
      <FadeIn delay={0} duration={0.5} className="mt-8" scrollTrigger={true}>
        <Link href="/projects" className="text-white text-lg font-medium hover:text-zinc-400 transition-colors">
          See all work →
        </Link>
      </FadeIn>
    </section>
  );
}
