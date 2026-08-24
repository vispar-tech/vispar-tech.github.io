export type Locale = "ru" | "en";

export interface NavContent {
  about: string;
  experience: string;
  projects: string;
  stack: string;
  contacts: string;
  /** mobile menu toggle label */
  menu: string;
}

export interface HeroContent {
  /** terminal-style line rendered above the name, e.g. "$ whoami" */
  prompt: string;
  name: string;
  /** rotating strings for the typing effect */
  roles: string[];
  location: string;
  photoAlt: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
}

export interface ExperienceItem {
  company: string;
  link?: string;
  role: string;
  period: string;
  summary: string;
  points: string[];
  stack: string[];
}

export interface ProjectItem {
  name: string;
  url: string;
  description: string;
  language?: string;
  /** filled at build time from the GitHub API; static fallback otherwise */
  stars?: number;
}

export interface StackGroup {
  name: string;
  items: string[];
}

export interface SiteContent {
  locale: Locale;
  meta: { title: string; description: string };
  nav: NavContent;
  /** accessibility strings */
  a11y: { skipToContent: string };
  hero: HeroContent;
  about: {
    heading: string;
    paragraphs: string[];
    stats: { value: string; label: string }[];
  };
  experience: { heading: string; items: ExperienceItem[] };
  projects: {
    heading: string;
    subtitle: string;
    viewAllLabel: string;
    viewAllUrl: string;
    items: ProjectItem[];
  };
  stack: { heading: string; groups: StackGroup[] };
  contacts: {
    heading: string;
    text: string;
    telegramUrl: string;
    telegramLabel: string;
    githubUrl: string;
    githubLabel: string;
    email: string;
    footerNote: string;
  };
}
