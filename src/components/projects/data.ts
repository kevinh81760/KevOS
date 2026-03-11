/**
 * Projects Data
 *
 * Minimal, clean placeholders (swap images/descriptions as needed).
 */

import { Project } from "./types";

export const projects: Project[] = [
  {
    id: "pointpal",
    name: "PointPal",
    description:
      "A travel points platform that helps users find high-value redemptions and plan trips efficiently (500+ users).",
    type: "Github",
    image: "/pointpal.png",
    imageFit: "fill",
    fileExtension: "exe",
    githubUrl: "https://github.com",
  },
  {
    id: "viral-engine",
    name: "ViralEngine",
    description:
      "An internal UGC analytics dashboard that replaced manual tracking and standardized reporting across SaaS apps.",
    type: "Github",
    image: "/viralengine.png",
    imageFit: "fill",
    fileExtension: "exe",
    githubUrl: "https://github.com",
  },
  {
    id: "notionclone",
    name: "Atlas",
    description:
      "A Notion clone application built with modern web technologies.",
    type: "Github",
    image: "/notionclone.png",
    fileExtension: "exe",
    githubUrl: "https://github.com",
  },
  {
    id: "burgerbots",
    name: "BurgerBots",
    description:
      "BurgerBots combines ABB robotics with human hospitality to transform the modern kitchen.",
    type: "Github",
    image: "/burgerbots.png",
    imageFit: "fill",
    fileExtension: "exe",
    githubUrl: "https://github.com",
  },
];
