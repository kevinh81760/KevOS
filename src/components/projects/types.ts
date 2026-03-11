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
  /** How the image fits: "fill" stretches to fill (whole image visible), "cover" fills with crop, "contain" fits inside (default: "contain") */
  imageFit?: "fill" | "cover" | "contain";
  /** File extension for display (e.g., "exe", "js", "ts") */
  fileExtension: string;
  /** GitHub repository URL */
  githubUrl?: string;
}
