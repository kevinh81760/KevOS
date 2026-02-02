"use client";

import Image from "next/image";
import { Project } from "./types";
import BubbleFade from "@/components/animations/BubbleFade";

interface ProjectDetailsProps {
  project: Project | null;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  if (!project) {
    return (
      <div className="h-full flex items-center justify-center">
        <p className="text-white/40 text-sm">Select a project to view details</p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col min-h-0 overflow-hidden">
      {/* Project Image */}
      <div className="relative w-full aspect-video overflow-hidden bg-[#111111] mb-6 flex-shrink-0 ml-[55px] h-[550px]">
        {project.image ? (
          <BubbleFade key={`${project.id}-image`} className="absolute inset-0">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover scale-105"
            />
          </BubbleFade>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
            <div className="absolute inset-0 bg-zinc-800/50"></div>
            <span className="text-zinc-500 text-xs uppercase tracking-wide">No Image</span>
          </div>
        )}
      </div>

      {/* Metadata Section */}
      <div className="flex flex-col gap-4 overflow-y-auto scrollbar-hide flex-1 min-h-0 ml-[55px]">
        <BubbleFade key={`${project.id}-name`} delay={0.1}>
          <div>
            <h3 className="text-medium text-white/60 uppercase tracking-wide mb-2 font-semibold">Name</h3>
            <p className="text-white text-lg font-medium">{project.name}</p>
          </div>
        </BubbleFade>

        <BubbleFade key={`${project.id}-description`} delay={0.2}>
          <div>
            <h3 className="text-medium text-white/60 uppercase tracking-wide mb-2 font-semibold">Description</h3>
            <p className="text-white text-lg font-medium leading-relaxed">{project.description}</p>
          </div>
        </BubbleFade>

        <BubbleFade key={`${project.id}-github`} delay={0.3}>
          <div>
            <h3 className="text-medium text-white/60 uppercase tracking-wide mb-2 font-semibold">Github</h3>
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-lg font-medium hover:text-white/80 underline transition-colors"
              >
                {project.githubUrl}
              </a>
            ) : (
              <p className="text-white text-lg font-medium">{project.type}</p>
            )}
          </div>
        </BubbleFade>
      </div>
    </div>
  );
}
