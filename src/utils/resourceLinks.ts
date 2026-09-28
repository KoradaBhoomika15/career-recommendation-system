/**
 * Utility functions for building safe, canonical search links and platform badges.
 * Rules:
 * - Build platform SEARCH URLs using encodeURIComponent so links never break.
 * - Only use direct URLs if they are verified stable homepages (like CS50, freeCodeCamp).
 */

export interface PlatformBadgeConfig {
  id: string;
  name: string;
  iconEmoji: string;
  badgeClass: string;
  glowClass: string;
  buttonClass: string;
  defaultActionText: string;
}

export const PLATFORM_REGISTRY: Record<string, PlatformBadgeConfig> = {
  youtube: {
    id: 'youtube',
    name: 'YouTube',
    iconEmoji: '▶️',
    badgeClass: 'bg-red-500/20 text-red-300 border-red-500/40 shadow-red-500/20',
    glowClass: 'shadow-[0_0_12px_rgba(239,68,68,0.25)]',
    buttonClass: 'hover:bg-red-500/20 hover:border-red-400/50 hover:text-red-200',
    defaultActionText: 'Open on YouTube'
  },
  coursera: {
    id: 'coursera',
    name: 'Coursera',
    iconEmoji: '🎓',
    badgeClass: 'bg-blue-500/20 text-blue-300 border-blue-500/40 shadow-blue-500/20',
    glowClass: 'shadow-[0_0_12px_rgba(59,130,246,0.25)]',
    buttonClass: 'hover:bg-blue-500/20 hover:border-blue-400/50 hover:text-blue-200',
    defaultActionText: 'View on Coursera'
  },
  freecodecamp: {
    id: 'freecodecamp',
    name: 'freeCodeCamp',
    iconEmoji: '🔥',
    badgeClass: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-emerald-500/20',
    glowClass: 'shadow-[0_0_12px_rgba(16,185,129,0.25)]',
    buttonClass: 'hover:bg-emerald-500/20 hover:border-emerald-400/50 hover:text-emerald-200',
    defaultActionText: 'Open on freeCodeCamp'
  },
  nptel: {
    id: 'nptel',
    name: 'NPTEL',
    iconEmoji: '🏛️',
    badgeClass: 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-amber-500/20',
    glowClass: 'shadow-[0_0_12px_rgba(245,158,11,0.25)]',
    buttonClass: 'hover:bg-amber-500/20 hover:border-amber-400/50 hover:text-amber-200',
    defaultActionText: 'Access on NPTEL'
  },
  edx: {
    id: 'edx',
    name: 'edX',
    iconEmoji: '🟣',
    badgeClass: 'bg-purple-500/20 text-purple-300 border-purple-500/40 shadow-purple-500/20',
    glowClass: 'shadow-[0_0_12px_rgba(168,85,247,0.25)]',
    buttonClass: 'hover:bg-purple-500/20 hover:border-purple-400/50 hover:text-purple-200',
    defaultActionText: 'View on edX'
  },
  udemy: {
    id: 'udemy',
    name: 'Udemy',
    iconEmoji: '🟣',
    badgeClass: 'bg-violet-500/20 text-violet-300 border-violet-500/40 shadow-violet-500/20',
    glowClass: 'shadow-[0_0_12px_rgba(139,92,246,0.25)]',
    buttonClass: 'hover:bg-violet-500/20 hover:border-violet-400/50 hover:text-violet-200',
    defaultActionText: 'View on Udemy'
  },
  khanacademy: {
    id: 'khanacademy',
    name: 'Khan Academy',
    iconEmoji: '🌱',
    badgeClass: 'bg-teal-500/20 text-teal-300 border-teal-500/40 shadow-teal-500/20',
    glowClass: 'shadow-[0_0_12px_rgba(20,184,166,0.25)]',
    buttonClass: 'hover:bg-teal-500/20 hover:border-teal-400/50 hover:text-teal-200',
    defaultActionText: 'Learn on Khan Academy'
  },
  cs50: {
    id: 'cs50',
    name: 'CS50 / Harvard',
    iconEmoji: '🔴',
    badgeClass: 'bg-rose-600/20 text-rose-200 border-rose-500/50 shadow-rose-600/20',
    glowClass: 'shadow-[0_0_12px_rgba(225,29,72,0.25)]',
    buttonClass: 'hover:bg-rose-600/20 hover:border-rose-400/50 hover:text-rose-200',
    defaultActionText: 'Study on CS50'
  },
  googlelearn: {
    id: 'googlelearn',
    name: 'Google / Cloud',
    iconEmoji: '🌐',
    badgeClass: 'bg-sky-500/20 text-sky-300 border-sky-500/40 shadow-sky-500/20',
    glowClass: 'shadow-[0_0_12px_rgba(14,165,233,0.25)]',
    buttonClass: 'hover:bg-sky-500/20 hover:border-sky-400/50 hover:text-sky-200',
    defaultActionText: 'View on Google'
  },
  officialdocs: {
    id: 'officialdocs',
    name: 'Official Docs',
    iconEmoji: '📖',
    badgeClass: 'bg-slate-500/20 text-slate-300 border-slate-400/40 shadow-slate-500/20',
    glowClass: 'shadow-[0_0_12px_rgba(148,163,184,0.25)]',
    buttonClass: 'hover:bg-slate-500/20 hover:border-slate-400/50 hover:text-slate-200',
    defaultActionText: 'Read Documentation'
  },
  googlebooks: {
    id: 'googlebooks',
    name: 'Google Books',
    iconEmoji: '📚',
    badgeClass: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40 shadow-yellow-500/20',
    glowClass: 'shadow-[0_0_12px_rgba(234,179,8,0.25)]',
    buttonClass: 'hover:bg-yellow-500/20 hover:border-yellow-400/50 hover:text-yellow-200',
    defaultActionText: 'Find on Google Books'
  },
  amazon: {
    id: 'amazon',
    name: 'Amazon',
    iconEmoji: '📦',
    badgeClass: 'bg-amber-600/20 text-amber-300 border-amber-500/40 shadow-amber-600/20',
    glowClass: 'shadow-[0_0_12px_rgba(217,119,6,0.25)]',
    buttonClass: 'hover:bg-amber-600/20 hover:border-amber-400/50 hover:text-amber-200',
    defaultActionText: 'Find on Amazon'
  },
  netflix: {
    id: 'netflix',
    name: 'Netflix',
    iconEmoji: '🎬',
    badgeClass: 'bg-red-700/25 text-red-200 border-red-600/50 shadow-red-700/20',
    glowClass: 'shadow-[0_0_12px_rgba(185,28,28,0.3)]',
    buttonClass: 'hover:bg-red-700/20 hover:border-red-500/50 hover:text-red-200',
    defaultActionText: 'Watch on Netflix'
  },
  primevideo: {
    id: 'primevideo',
    name: 'Prime Video',
    iconEmoji: '📺',
    badgeClass: 'bg-sky-600/25 text-sky-200 border-sky-500/50 shadow-sky-600/20',
    glowClass: 'shadow-[0_0_12px_rgba(2,132,199,0.3)]',
    buttonClass: 'hover:bg-sky-600/20 hover:border-sky-500/50 hover:text-sky-200',
    defaultActionText: 'Watch on Prime Video'
  },
  hotstar: {
    id: 'hotstar',
    name: 'JioHotstar',
    iconEmoji: '⭐',
    badgeClass: 'bg-blue-700/25 text-blue-200 border-blue-600/50 shadow-blue-700/20',
    glowClass: 'shadow-[0_0_12px_rgba(29,78,216,0.3)]',
    buttonClass: 'hover:bg-blue-700/20 hover:border-blue-500/50 hover:text-blue-200',
    defaultActionText: 'Watch on Hotstar'
  },
  mitocw: {
    id: 'mitocw',
    name: 'MIT OCW',
    iconEmoji: '🏛️',
    badgeClass: 'bg-rose-500/20 text-rose-300 border-rose-500/40 shadow-rose-500/20',
    glowClass: 'shadow-[0_0_12px_rgba(244,63,94,0.25)]',
    buttonClass: 'hover:bg-rose-500/20 hover:border-rose-400/50 hover:text-rose-200',
    defaultActionText: 'Access MIT OCW'
  },
  fastai: {
    id: 'fastai',
    name: 'fast.ai',
    iconEmoji: '⚡',
    badgeClass: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40 shadow-indigo-500/20',
    glowClass: 'shadow-[0_0_12px_rgba(99,102,241,0.25)]',
    buttonClass: 'hover:bg-indigo-500/20 hover:border-indigo-400/50 hover:text-indigo-200',
    defaultActionText: 'Open on fast.ai'
  },
  generic: {
    id: 'generic',
    name: 'Online Resource',
    iconEmoji: '🔗',
    badgeClass: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 shadow-cyan-500/20',
    glowClass: 'shadow-[0_0_12px_rgba(6,182,212,0.25)]',
    buttonClass: 'hover:bg-cyan-500/20 hover:border-cyan-400/50 hover:text-cyan-200',
    defaultActionText: 'Access Resource'
  }
};

/**
 * Detect canonical platform key from platform or provider string and item type
 */
export function detectPlatformKey(rawPlatformOrProvider?: string, itemType?: string): string {
  if (!rawPlatformOrProvider && itemType === 'book') return 'googlebooks';
  if (!rawPlatformOrProvider && (itemType === 'Movie' || itemType === 'Documentary' || itemType === 'Series')) return 'netflix';
  if (!rawPlatformOrProvider && itemType === 'technology') return 'officialdocs';
  if (!rawPlatformOrProvider) return 'generic';

  const s = rawPlatformOrProvider.toLowerCase();

  if (s.includes('youtube') || s.includes('3blue1brown') || s.includes('corey schafer') || s.includes('traversy') || s.includes('fireship')) {
    return 'youtube';
  }
  if (s.includes('coursera') || s.includes('deeplearning.ai') || s.includes('andrew ng')) {
    return 'coursera';
  }
  if (s.includes('freecodecamp')) {
    return 'freecodecamp';
  }
  if (s.includes('nptel') || s.includes('iit')) {
    return 'nptel';
  }
  if (s.includes('cs50') || s.includes('harvard')) {
    return 'cs50';
  }
  if (s.includes('edx')) {
    return 'edx';
  }
  if (s.includes('udemy')) {
    return 'udemy';
  }
  if (s.includes('khan academy') || s.includes('khan')) {
    return 'khanacademy';
  }
  if (s.includes('fast.ai')) {
    return 'fastai';
  }
  if (s.includes('mit') || s.includes('mit opencourseware')) {
    return 'mitocw';
  }
  if (s.includes('google') || s.includes('microsoft') || s.includes('cloud')) {
    return 'googlelearn';
  }
  if (s.includes('book') || s.includes('amazon') || s.includes('oreilly') || itemType === 'book') {
    return 'googlebooks';
  }
  if (s.includes('netflix')) {
    return 'netflix';
  }
  if (s.includes('prime') || s.includes('amazon prime')) {
    return 'primevideo';
  }
  if (s.includes('hotstar') || s.includes('jiohotstar') || s.includes('disney')) {
    return 'hotstar';
  }
  if (s.includes('docs') || s.includes('documentation') || s.includes('w3schools') || s.includes('mdn') || itemType === 'technology') {
    return 'officialdocs';
  }

  return 'generic';
}

/**
 * Build safe and non-breaking search link based on platform and resource title.
 * Ensures user is taken directly to active search/page on the platform.
 */
export function buildResourceLink(
  platformOrProvider: string,
  title: string,
  directUrl?: string
): string {
  // If it is a known stable official link that shouldn't be searched (e.g. CS50 portal, freeCodeCamp homepage, fast.ai)
  if (directUrl && (
    directUrl.startsWith('https://cs50.harvard.edu/') ||
    directUrl.startsWith('https://course.fast.ai/') ||
    directUrl.startsWith('https://huggingface.co/learn/') ||
    directUrl.startsWith('https://fullstackdeeplearning.com/')
  )) {
    return directUrl;
  }

  const platformKey = detectPlatformKey(platformOrProvider);
  const encodedTitle = encodeURIComponent(title.trim());

  switch (platformKey) {
    case 'youtube':
      return `https://www.youtube.com/results?search_query=${encodedTitle}`;
    case 'coursera':
      return `https://www.coursera.org/search?query=${encodedTitle}`;
    case 'freecodecamp':
      return `https://www.freecodecamp.org/news/search/?query=${encodedTitle}`;
    case 'nptel':
      return `https://www.google.com/search?q=${encodedTitle}+NPTEL+course`;
    case 'edx':
      return `https://www.edx.org/search?q=${encodedTitle}`;
    case 'udemy':
      return `https://www.udemy.com/courses/search/?q=${encodedTitle}`;
    case 'khanacademy':
      return `https://www.khanacademy.org/search?page_search_query=${encodedTitle}`;
    case 'cs50':
      if (directUrl && directUrl.includes('cs50.harvard.edu')) return directUrl;
      return `https://www.google.com/search?q=${encodedTitle}+Harvard+CS50`;
    case 'googlebooks':
      return `https://www.google.com/books?q=${encodedTitle}`;
    case 'amazon':
      return `https://www.amazon.in/s?k=${encodedTitle}+book`;
    case 'netflix':
      return `https://www.google.com/search?q=${encodedTitle}+Netflix`;
    case 'primevideo':
      return `https://www.google.com/search?q=${encodedTitle}+Amazon+Prime+Video`;
    case 'hotstar':
      return `https://www.google.com/search?q=${encodedTitle}+Disney+Hotstar`;
    case 'officialdocs':
      return `https://www.google.com/search?q=${encodedTitle}+official+documentation`;
    case 'fastai':
      return directUrl || `https://www.google.com/search?q=${encodedTitle}+fast.ai`;
    case 'mitocw':
      return `https://www.google.com/search?q=${encodedTitle}+MIT+OpenCourseWare`;
    case 'googlelearn':
      return `https://www.google.com/search?q=${encodedTitle}+Google+Cloud+training`;
    default:
      return `https://www.google.com/search?q=${encodedTitle}+${encodeURIComponent(platformOrProvider || 'course')}`;
  }
}

/**
 * Returns YouTube tutorial search link for any milestone project idea
 */
export function getYouTubeProjectTutorialLink(projectIdea: string): string {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(projectIdea.trim() + ' project tutorial')}`;
}

/**
 * Get display config and button text for any platform
 */
export function getPlatformBadgeConfig(platformOrProvider?: string, itemType?: string): PlatformBadgeConfig {
  const key = detectPlatformKey(platformOrProvider, itemType);
  return PLATFORM_REGISTRY[key] || PLATFORM_REGISTRY.generic;
}
