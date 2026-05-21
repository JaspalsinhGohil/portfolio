export interface Project {
  id: string;
  title: string;
  company?: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  impact?: string;
  playStoreLink?: string;
  githubLink?: string;
  appType: 'ride-sharing' | 'home-automation' | 'flutter-app' | 'investment' | 'job-portal' | 'sdk' | 'live-stream' | 'iptv';
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number; iconName?: string }[];
}
