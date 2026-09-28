import { Career } from '../types';
import { technicalCareers } from './careersPart1';
import { nonTechAndDomainCareers } from './careersPart2';

export const allCareers: Career[] = [
  ...technicalCareers,
  ...nonTechAndDomainCareers,
];

export const allInterestsList = [
  'Technology',
  'AI',
  'Engineering',
  'Design',
  'Business',
  'Healthcare',
  'Finance',
  'Creative Arts',
  'Teaching',
  'Data',
  'Marketing',
  'Science'
];

export const defaultSkillsList = [
  { key: 'Python', label: 'Python Programming', category: 'Technical' },
  { key: 'SQL', label: 'SQL & Databases', category: 'Data' },
  { key: 'Communication', label: 'Communication & Storytelling', category: 'Interpersonal' },
  { key: 'Problem Solving', label: 'Problem Solving & Logic', category: 'Analytical' },
  { key: 'Creativity', label: 'Creativity & Ideation', category: 'Creative' },
  { key: 'Math', label: 'Mathematics & Statistics', category: 'Analytical' },
  { key: 'Design', label: 'Visual & UX Design', category: 'Creative' },
  { key: 'Leadership', label: 'Leadership & Management', category: 'Business' }
];

export function getCareerBySlug(slug: string): Career | undefined {
  return allCareers.find(c => c.slug === slug || c.id === slug);
}

export function getCareerById(id: string): Career | undefined {
  return allCareers.find(c => c.id === id);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(allCareers.map(c => c.category)));
}
