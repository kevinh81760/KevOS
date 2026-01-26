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
  /** Project title */
  title: string;
  /** Brief description of the project */
  description: string;
  /** Optional image URL or path */
  image?: string;
  /** Array of technology tags */
  tags: string[];
  /** Project links */
  links: {
    /** GitHub repository URL */
    github?: string;
    /** Live demo URL */
    demo?: string;
    /** Any other external link */
    external?: string;
  };
  /** Project completion or publication date */
  date: string;
}

/**
 * Work experience data structure
 * Used for displaying professional experience timeline
 */
export interface Experience {
  /** Company or organization name */
  company: string;
  /** Job title or role */
  role: string;
  /** Employment period */
  period: {
    /** Start date (e.g., "Jan 2020" or "2020-01") */
    start: string;
    /** End date (e.g., "Dec 2022" or "2022-12"). Use "Present" for current role */
    end: string;
  };
  /** Detailed job description */
  description: string;
  /** Array of key achievements or responsibilities */
  achievements?: string[];
  /** Technologies or tools used */
  technologies: string[];
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
