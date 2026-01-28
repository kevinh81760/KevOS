"use client";

import ProjectItem from "./ProjectItem";
import { Project } from "@/lib/types";

interface ProjectExplorerProps {
  projects: Project[];
  selectedProjectId: string | null;
  onSelectProject: (projectId: string) => void;
}

export default function ProjectExplorer({
  projects,
  selectedProjectId,
  onSelectProject,
}: ProjectExplorerProps) {
  return (
    <div className="fixed top-[126px] left-[34px] w-64 pr-8 z-10 h-[calc(100vh-126px)]">
      <div className="h-full flex flex-col min-h-0">
        <div className="mb-4 flex-shrink-0">
          <h2 className="text-medium text-white/60 uppercase tracking-wide mb-2 font-bold">Files</h2>
        </div>
        <div className="flex flex-col gap-2 overflow-y-auto scrollbar-hide flex-1 min-h-0">
          {projects.map((project) => (
            <ProjectItem
              key={project.id}
              name={project.name}
              fileExtension={project.fileExtension}
              isSelected={selectedProjectId === project.id}
              onClick={() => onSelectProject(project.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
