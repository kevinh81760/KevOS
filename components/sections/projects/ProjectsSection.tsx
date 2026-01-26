import { projects } from "@/lib/data";
import ProjectGrid from "./ProjectGrid";

export default function ProjectsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <h2 className="mb-12 text-center text-4xl font-bold tracking-tight">
        Projects
      </h2>
      <ProjectGrid projects={projects} />
    </section>
  );
}
