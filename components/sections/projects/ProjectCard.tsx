import Link from "next/link";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg">
      {project.image && (
        <div className="relative h-48 w-full overflow-hidden bg-gray-100">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-start justify-between">
          <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
          <span className="text-sm text-gray-500">{project.date}</span>
        </div>
        <p className="mb-4 flex-1 text-gray-700">{project.description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {project.links.github && (
            <Link
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-700 underline transition-colors hover:text-gray-900"
            >
              GitHub
            </Link>
          )}
          {project.links.demo && (
            <Link
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-700 underline transition-colors hover:text-gray-900"
            >
              Demo
            </Link>
          )}
          {project.links.external && (
            <Link
              href={project.links.external}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-700 underline transition-colors hover:text-gray-900"
            >
              Visit
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
