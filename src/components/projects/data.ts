/**
 * Projects Data
 *
 * Minimal, clean placeholders (swap images/descriptions as needed).
 */

import { Project } from "./types";

export const projects: Project[] = [
  {
    id: "pointpal",
    name: "PointPal.tsx",
    description:
      "A travel points platform that helps users find high-value redemptions and plan trips efficiently (500+ users).",
    type: "Web Application",
    image: "/pointpal.png",
    fileExtension: "tsx",
  },
  {
    id: "viral-engine",
    name: "ViralEngine.tsx",
    description:
      "An internal UGC analytics dashboard that replaced manual tracking and standardized reporting across SaaS apps.",
    type: "Web Application",
    image: "/viralengine.png",
    fileExtension: "tsx",
  },
  {
    id: "notionclone",
    name: "Atlas.tsx",
    description:
      "A Notion clone application built with modern web technologies.",
    type: "Web Application",
    image: "/notionclone.png",
    fileExtension: "tsx",
  },
];
