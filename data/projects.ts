// ============================================================
// DATA: PROJECTS
// To add a new project, copy one object and fill in your info.
// ============================================================

export interface Project {
  id: number;
  title: string;
  category: "Automation" | "Embedded" | "IoT" | "AI" | "Electronics";
  problem: string;
  solution: string;
  technologies: string[];
  github?: string;
  demo?: string;
  status: "Completed" | "In Progress" | "Concept";
  year: string;
  highlights: string[];
}

export const projects: Project[] = [
  
  
];
