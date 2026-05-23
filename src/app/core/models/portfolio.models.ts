export interface ContactInfo {
  name: string;
  headline: string;
  location: string;
  availability: string;
  phone: string;
  email: string;
  linkedInUrl: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Job {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
}

export interface LanguageItem {
  language: string;
  level: string;
}

export interface PortfolioContent {
  contact: ContactInfo;
  summaryParagraphs: string[];
  skillCategories: SkillCategory[];
  experience: Job[];
  education: EducationItem[];
  languages: LanguageItem[];
}
