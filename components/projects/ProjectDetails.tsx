"use client";

import Image from "next/image";
import { Project } from "@/lib/types";

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
      <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-[#111111] mb-6 flex-shrink-0">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
            <div className="absolute inset-0 bg-zinc-800/50"></div>
            <span className="text-zinc-500 text-xs uppercase tracking-wide">No Image</span>
          </div>
        )}
      </div>

      {/* Metadata Section */}
      <div className="flex flex-col gap-4 overflow-y-auto scrollbar-hide flex-1 min-h-0">
        <div>
          <h3 className="text-xs text-white/60 uppercase tracking-wide mb-2">Name</h3>
          <p className="text-white text-lg font-medium">{project.name}</p>
        </div>

        <div>
          <h3 className="text-xs text-white/60 uppercase tracking-wide mb-2">Description</h3>
          <p className="text-white/80 text-sm leading-relaxed">{project.description}</p>
        </div>

        <div>
          <h3 className="text-xs text-white/60 uppercase tracking-wide mb-2">Type</h3>
          <p className="text-white/80 text-sm">{project.type}</p>
        </div>
      </div>
    </div>
  );
}
