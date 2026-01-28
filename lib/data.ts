/**
 * Experience Data
 *
 * Clean, professional, minimalistic.
 * Types are co-located with data for clean organization.
 */

import { Experience, Project } from "./types";

export const experiences: Experience[] = [
  {
    id: "24labs",
    company: "24Labs",
    title: "Product Engineer",
    dates: "Jul 2025 - Present",
    whatIDid:
      "Built and shipped full-stack products, including a consumer travel app and an internal UGC analytics platform, owning implementation from data modeling to UI and deployment.",
    howIDidIt: [
      "Shipped PointPal (web) to 500+ users by building core flows, iterating quickly, and improving reliability over time",
      "Built Viral Engine (internal) to replace manual UGC tracking with a centralized analytics dashboard used across the company’s SaaS apps",
      "Designed the backend data model and APIs using Supabase + Firebase to support scalable analytics and user workflows",
      "Delivered full-stack features end-to-end: database + auth + backend logic + UI, with a focus on maintainability and speed",
    ],
    whatIUsed: [
      "Next.js, TypeScript, React",
      "Supabase, Firebase (Auth/DB)",
      "PostgreSQL",
      "Vercel, GitHub",
    ],
    reflection:
      "This role strengthened my ability to ship end-to-end: define the data model, build the product surface area, and iterate based on real usage.",
  },
  {
    id: "9m-holdings",
    company: "9m Holdings",
    title: "Software Engineer",
    dates: "Nov 2024 - Apr 2025",
    whatIDid:
      "Built automation and internal tools for small businesses, focusing on reducing manual work and improving operational efficiency through workflow automation and mobile software.",
    howIDidIt: [
      "Built a bookkeeping automation that used computer vision to extract data from receipts/documents and automatically populated Google Sheets",
      "Improved restaurant bookkeeping efficiency by reducing manual entry and standardizing the intake → reconciliation workflow",
      "Developed a React Native mobile app with Supabase + Firebase-backed services for authentication and data storage",
      "Deployed cloud infrastructure using AWS services (DynamoDB, S3, EC2) to support storage, compute, and app operations",
    ],
    whatIUsed: [
      "React Native, TypeScript",
      "Supabase, Firebase",
      "AWS (DynamoDB, S3, EC2)",
      "Google Sheets integration",
      "OpenAI (Computer Vision)",
    ],
    reflection:
      "Freelance work taught me how to translate messy real-world processes into simple systems that save time and work reliably.",
  },
  {
    id: "avp-technology",
    company: "AVP Technology",
    title: "Software Engineer Intern",
    dates: "Jun 2024 - Aug 2024",
    whatIDid:
      "Developed a .NET-based robotic control interface that communicated with hardware systems over TCP to improve reliability and operator feedback during robotic movement workflows.",
    howIDidIt: [
      "Built a C#/.NET interface that established TCP connections to robotic systems and exchanged command/status messages",
      "Implemented connection handling and error states to reduce failures and improve operational reliability",
      "Worked with engineers and technicians to validate behavior against real hardware constraints and edge cases",
      "Improved robotic movement reliability by surfacing actionable feedback and stabilizing the control flow",
    ],
    whatIUsed: ["C#, .NET", "TCP/IP", "Hardware integration", "Git"],
    reflection:
      "This experience sharpened my approach to building software that interfaces with real hardware—where reliability and clarity matter as much as features.",
  },
];

/**
 * Projects Data
 *
 * Minimal, clean placeholders (swap images/descriptions as needed).
 */
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
    image: "/viral-engine.png",
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
