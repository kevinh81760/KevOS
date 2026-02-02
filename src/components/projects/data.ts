/**
 * Projects Data
 *
 * Minimal, clean placeholders (swap images/descriptions as needed).
 */

import { Project } from "./types";

export const projects: Project[] = [
  {
    id: "pointpal",
    name: "PointPal.exe",
    description:
      "A travel points platform that helps users find high-value redemptions and plan trips efficiently (500+ users).",
    type: "Github",
    image: "/pointpal.png",
    fileExtension: "exe",
    githubUrl: "https://github.com",
  },
  {
    id: "viral-engine",
    name: "ViralEngine.exe",
    description:
      "An internal UGC analytics dashboard that replaced manual tracking and standardized reporting across SaaS apps.",
    type: "Github",
    image: "/viralengine.png",
    fileExtension: "exe",
    githubUrl: "https://github.com",
  },
  {
    id: "notionclone",
    name: "Atlas.exe",
    description:
      "A Notion clone application built with modern web technologies.",
    type: "Github",
    image: "/notionclone.png",
    fileExtension: "exe",
    githubUrl: "https://github.com",
  },
];
