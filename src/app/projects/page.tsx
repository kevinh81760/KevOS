"use client";

import { useState } from "react";
import { projects } from "@/components/projects/data";
import ProjectExplorer from "@/components/projects/ProjectExplorer";
import ProjectDetails from "@/components/projects/ProjectDetails";

export default function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    projects[0]?.id || null
  );

  const selectedProject = projects.find((p) => p.id === selectedProjectId) || null;

  return (
    <>
      {/* Fixed Left Sidebar - Project Explorer */}
      <ProjectExplorer
        projects={projects}
        selectedProjectId={selectedProjectId}
        onSelectProject={setSelectedProjectId}
      />

      {/* Page container */}
      <div className="fixed inset-0 top-[var(--navbar-height)] overflow-hidden">
        <div className="h-full max-w-[var(--layout-max-width)] mx-auto">
          <div className="h-full flex pl-[var(--content-offset-projects)] pr-8">
            {/* Right Content - Project Details */}
            <div className="flex-1 min-w-0 pt-12 h-full flex flex-col overflow-hidden">
              <ProjectDetails project={selectedProject} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
