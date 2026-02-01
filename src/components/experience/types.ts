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
