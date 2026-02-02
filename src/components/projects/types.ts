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
  /** File extension for display (e.g., "exe", "js", "ts") */
  fileExtension: string;
  /** GitHub repository URL */
  githubUrl?: string;
}
