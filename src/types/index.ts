export type ExperienceLevel = 'Beginner' | 'Intermediate' | 'Advanced';
export type WorkStyle = 'Remote' | 'Office' | 'Hybrid';
export type CareerGoal = 'Get a job' | 'Switch career' | 'Learn a skill' | 'Explore options';
export type PreferredPace = 'Intensive (20+ hrs/wk)' | 'Balanced (10-15 hrs/wk)' | 'Relaxed (5 hrs/wk)';
export type SalaryPriority = 'High Growth' | 'Immediate Stability' | 'Work-Life Balance';

export interface UserProfile {
  interests: string[];
  skills: Record<string, number>; // skill name -> level 0-10
  goal: CareerGoal;
  experienceLevel: ExperienceLevel;
  workStyle: WorkStyle;
  pace: PreferredPace;
  salaryPriority: SalaryPriority;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  avatarSeed?: string;
  profile?: UserProfile;
  createdAt: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  provider: string; // e.g. "freeCodeCamp", "Harvard CS50", "Coursera", "YouTube"
  platform?: string;
  duration: string;
  level: ExperienceLevel;
  isFree: boolean;
  price?: 'Free' | 'Paid';
  link: string;
  description: string;
  type?: 'video' | 'course' | 'book' | 'docs';
}

export interface TechItem {
  id: string;
  name: string;
  category: string;
  popularity: number; // 1-100
  learningCurve: 'Low' | 'Medium' | 'High';
  whyImportant: string;
  platform?: string;
  price?: 'Free' | 'Paid';
  level?: ExperienceLevel;
  type?: 'docs' | 'tool';
  link?: string;
}

export interface BookItem {
  id: string;
  title: string;
  author: string;
  year?: string;
  description: string;
  keyTakeaway: string;
  platform?: string;
  price?: 'Free' | 'Paid';
  level?: ExperienceLevel;
  type?: 'book';
  link?: string;
}

export interface MediaItem {
  id: string;
  title: string;
  type: 'Movie' | 'Documentary' | 'Series';
  year: string;
  description: string;
  relevance: string;
  platform?: string;
  price?: 'Free' | 'Paid';
  level?: ExperienceLevel;
  link?: string;
}

export interface RoadmapStage {
  stageNumber: number;
  title: string;
  duration: string;
  subtitle: string;
  description: string;
  skillsToLearn: string[];
  resources: {
    title: string;
    provider: string;
    platform?: string;
    url?: string;
    link?: string;
    free: boolean;
    price?: 'Free' | 'Paid';
    level?: ExperienceLevel;
    type?: 'course' | 'video' | 'docs' | 'book';
  }[];
  projectIdea: string;
  keyDeliverables: string[];
}

export interface Career {
  id: string;
  slug: string;
  title: string;
  category: string;
  field: 'Technical' | 'Creative' | 'Business & Management' | 'Data & AI' | 'Domain Specialist';
  summary: string;
  description: string;
  salaryRangeINR: {
    entry: string;
    mid: string;
    senior: string;
    averageDisplay: string;
  };
  jobRoles: string[];
  tags: string[];
  requiredSkills: {
    name: string;
    weight: number; // 0-1
    minLevel: number; // 0-10
  }[];
  difficulty: ExperienceLevel;
  recommendedForGoals: CareerGoal[];
  workStyleFit: WorkStyle[];
  roadmap: RoadmapStage[];
  courses: ResourceItem[];
  technologies: TechItem[];
  books: BookItem[];
  movies: MediaItem[];
  matchScore?: number;
  matchReasons?: string[];
}

export type SavedCategory = 'career' | 'course' | 'technology' | 'book' | 'movie';

export interface SavedItem {
  id: string;
  type: SavedCategory;
  itemId: string;
  title: string;
  subtitle?: string;
  category?: string;
  data: any;
  savedAt: string;
}

export interface RecommendationHistoryEntry {
  id: string;
  timestamp: string;
  topCareerTitles: string[];
  interestsCount: number;
  topSkills: string[];
}
