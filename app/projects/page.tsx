"use client";

import { useState } from "react";
import { projects } from "@/lib/data";
import ProjectExplorer from "@/components/projects/ProjectExplorer";
import ProjectDetails from "@/components/projects/ProjectDetails";

export default function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    projects[0]?.id || null
  );

  const selectedProject = projects.find((p) => p.id === selectedProjectId) || null;

  return (
    <div className="fixed inset-0 top-[80px] overflow-hidden">
      <div className="h-full max-w-7xl mx-auto">
        <div className="h-full flex gap-6 px-6">
          {/* Left Sidebar - Project Explorer */}
          <div className="w-64 flex-shrink-0 pt-12 h-full flex flex-col">
            <ProjectExplorer
              projects={projects}
              selectedProjectId={selectedProjectId}
              onSelectProject={setSelectedProjectId}
            />
          </div>

          {/* Right Content - Project Details */}
          <div className="flex-1 min-w-0 pt-12 h-full flex flex-col overflow-hidden">
            <ProjectDetails project={selectedProject} />
          </div>
        </div>
      </div>
    </div>
  );
}
