/**
 * Content Data
 * 
 * This is the main file where you add your portfolio content.
 * Update the arrays and objects below with your own information.
 */

import type { Project, Experience, HomeContent, Skill } from "./types";

/**
 * Home/Hero Section Content
 * Edit this object to customize your landing page content
 */
export const homeContent: HomeContent = {
  name: "Your Name",
  title: "Full Stack Developer",
  subtitle: "Building modern web experiences",
  description:
    "I'm a passionate developer who loves creating beautiful and functional web applications. I specialize in React, Next.js, and TypeScript.",
  cta: {
    primary: {
      text: "View My Work",
      link: "/projects",
    },
    secondary: {
      text: "Get In Touch",
      link: "/contact",
    },
  },
};

/**
 * Projects Array
 * Add your portfolio projects here
 * Each project should include title, description, tags, links, and date
 */
export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform built with Next.js, featuring user authentication, payment processing, and admin dashboard.",
    image: "/images/project-1.jpg",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    links: {
      github: "https://github.com/yourusername/ecommerce-platform",
      demo: "https://ecommerce-demo.vercel.app",
    },
    date: "2024",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/images/project-2.jpg",
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    links: {
      github: "https://github.com/yourusername/task-manager",
      demo: "https://task-manager-demo.vercel.app",
    },
    date: "2023",
  },
  {
    title: "Weather Dashboard",
    description:
      "A beautiful weather dashboard that displays current conditions, forecasts, and weather maps using multiple API integrations.",
    image: "/images/project-3.jpg",
    tags: ["React", "TypeScript", "Chart.js", "Weather API", "CSS"],
    links: {
      github: "https://github.com/yourusername/weather-dashboard",
      demo: "https://weather-dashboard.vercel.app",
    },
    date: "2023",
  },
];

/**
 * Work Experience Array
 * Add your professional experience here
 * Include company, role, period, description, achievements, and technologies
 */
export const experiences: Experience[] = [
  {
    company: "Tech Company Inc.",
    role: "Senior Full Stack Developer",
    period: {
      start: "Jan 2022",
      end: "Present",
    },
    description:
      "Lead development of multiple web applications serving thousands of users. Collaborate with cross-functional teams to deliver high-quality software solutions.",
    achievements: [
      "Improved application performance by 40% through code optimization",
      "Mentored junior developers and established coding best practices",
      "Led migration to modern tech stack (React, Next.js, TypeScript)",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "AWS",
    ],
  },
  {
    company: "StartupXYZ",
    role: "Frontend Developer",
    period: {
      start: "Jun 2020",
      end: "Dec 2021",
    },
    description:
      "Developed and maintained frontend applications using React and modern JavaScript. Worked closely with designers to implement pixel-perfect UIs.",
    achievements: [
      "Built responsive components used across multiple products",
      "Reduced bundle size by 30% through code splitting",
      "Implemented accessibility features improving WCAG compliance",
    ],
    technologies: ["React", "JavaScript", "CSS", "Webpack", "Jest"],
  },
  {
    company: "Digital Agency",
    role: "Junior Web Developer",
    period: {
      start: "Jan 2019",
      end: "May 2020",
    },
    description:
      "Created custom websites and web applications for clients. Collaborated with designers and project managers to deliver projects on time.",
    technologies: ["HTML", "CSS", "JavaScript", "WordPress", "PHP"],
  },
];

/**
 * Skills Array
 * Add your technical skills here
 * Organize by category (Frontend, Backend, Tools, etc.)
 */
export const skills: Skill[] = [
  { name: "React", category: "Frontend", level: 5 },
  { name: "Next.js", category: "Frontend", level: 5 },
  { name: "TypeScript", category: "Frontend", level: 4 },
  { name: "JavaScript", category: "Frontend", level: 5 },
  { name: "HTML/CSS", category: "Frontend", level: 5 },
  { name: "Node.js", category: "Backend", level: 4 },
  { name: "Express", category: "Backend", level: 4 },
  { name: "PostgreSQL", category: "Backend", level: 4 },
  { name: "MongoDB", category: "Backend", level: 3 },
  { name: "Git", category: "Tools", level: 5 },
  { name: "Docker", category: "Tools", level: 3 },
  { name: "AWS", category: "Tools", level: 3 },
];
