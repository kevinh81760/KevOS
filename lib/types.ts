/**
 * Type definitions for content data structures
 * 
 * These interfaces define the structure of data used throughout the application.
 * Update the corresponding data in lib/data.ts to populate your portfolio content.
 */

/**
 * Project data structure
 * Used for displaying portfolio projects
 */
export interface Project {
  /** Unique identifier for the project */
  id: string;
  /** Project name */
  name: string;
  /** Brief description of the project */
  description: string;
  /** Project type (e.g., "Web Application", "Mobile Application") */
  type: string;
  /** Project image URL or path */
  image: string;
  /** File extension for display (e.g., "tsx", "js", "ts") */
  fileExtension: string;
}

/**
 * Work experience data structure
 * Used for displaying professional experience timeline
 */
export interface Experience {
  /** Unique identifier for the experience */
  id: string;
  /** Company name */
  company: string;
  /** Job title */
  title: string;
  /** Employment dates (e.g., "Jan 2023 - Present") */
  dates: string;
  /** High-level description of your role and responsibilities */
  whatIDid: string;
  /** List of specific accomplishments and tasks */
  howIDidIt: string[];
  /** Technologies, tools, and frameworks used */
  whatIUsed: string[];
  /** Personal reflection or key takeaway from the experience */
  reflection?: string;
}

/**
 * Home/hero section content
 * Used for the main landing section
 */
export interface HomeContent {
  /** Your name */
  name: string;
  /** Professional title or tagline */
  title: string;
  /** Subtitle or secondary tagline */
  subtitle?: string;
  /** Main description paragraph */
  description: string;
  /** Call-to-action buttons */
  cta?: {
    /** Primary CTA button */
    primary?: {
      text: string;
      link: string;
    };
    /** Secondary CTA button */
    secondary?: {
      text: string;
      link: string;
    };
  };
}

/**
 * Skill data structure
 * Used for displaying technical skills
 */
export interface Skill {
  /** Skill name */
  name: string;
  /** Skill category (e.g., "Frontend", "Backend", "Tools") */
  category: string;
  /** Optional skill level (1-5) or icon name */
  level?: number;
  /** Optional icon identifier */
  icon?: string;
}
