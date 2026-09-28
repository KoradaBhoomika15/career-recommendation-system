import { Career, UserProfile } from '../types';

export interface ScoredCareer extends Career {
  matchScore: number;
  matchReasons: string[];
}

export function computeRecommendations(
  profile: UserProfile,
  careers: Career[]
): ScoredCareer[] {
  const scored = careers.map((career) => {
    const reasons: string[] = [];

    // 1. Interest Match (Weight: 30%)
    const userInterestsLower = (profile.interests || []).map((i) => i.toLowerCase().trim());
    const careerTagsLower = (career.tags || []).map((t) => t.toLowerCase().trim());

    const matchedTags = career.tags.filter((tag) =>
      userInterestsLower.includes(tag.toLowerCase().trim())
    );

    let interestScore = 0;
    if (userInterestsLower.length > 0 && careerTagsLower.length > 0) {
      const intersection = matchedTags.length;
      // High-yield overlap ratio gives sensible boost for focused alignment
      const coverage = intersection / Math.min(Math.max(1, userInterestsLower.length), careerTagsLower.length);
      const jaccard = intersection / new Set([...userInterestsLower, ...careerTagsLower]).size;
      interestScore = Math.min(30, (coverage * 0.7 + jaccard * 0.3) * 38);
    } else {
      interestScore = 15; // default neutral
    }

    if (matchedTags.length > 0) {
      if (matchedTags.length === 1) {
        reasons.push(`Direct alignment with your interest in ${matchedTags[0]}`);
      } else {
        reasons.push(`Strong overlap with your interests in ${matchedTags.slice(0, 3).join(', ')}`);
      }
    }

    // 2. Skill Match (Weight: 25%)
    let skillWeightedSum = 0;
    let totalSkillWeight = 0;
    const strongSkillsMatched: string[] = [];

    if (career.requiredSkills && career.requiredSkills.length > 0) {
      career.requiredSkills.forEach((req) => {
        totalSkillWeight += req.weight;
        // Check user skill (case-insensitive)
        let userLevel = 0;
        for (const [key, val] of Object.entries(profile.skills || {})) {
          if (key.toLowerCase().trim() === req.name.toLowerCase().trim()) {
            userLevel = Number(val) || 0;
            break;
          }
        }

        const fulfillment = Math.min(1.15, userLevel / Math.max(1, req.minLevel));
        skillWeightedSum += fulfillment * req.weight;

        if (userLevel >= req.minLevel && userLevel >= 5) {
          strongSkillsMatched.push(`${req.name} (${userLevel}/10)`);
        }
      });
    }

    const skillRatio = totalSkillWeight > 0 ? skillWeightedSum / totalSkillWeight : 0.6;
    const skillScore = Math.min(25, Math.max(5, skillRatio * 25));

    if (strongSkillsMatched.length > 0) {
      reasons.push(`Capitalizes on your high proficiency in ${strongSkillsMatched.slice(0, 2).join(' & ')}`);
    } else {
      // Find what skill they have that can transfer
      const userTopSkill = Object.entries(profile.skills || {}).sort((a, b) => b[1] - a[1])[0];
      if (userTopSkill && userTopSkill[1] >= 6) {
        reasons.push(`Builds progressively on your existing strength in ${userTopSkill[0]}`);
      }
    }

    // 3. Goal Match (Weight: 20%)
    let goalScore = 12;
    if (career.recommendedForGoals && career.recommendedForGoals.includes(profile.goal)) {
      goalScore = 20;
      reasons.push(`Optimal path to achieve your stated goal: "${profile.goal}"`);
    } else if (profile.goal === 'Explore options') {
      goalScore = 17;
      reasons.push(`High versatility across industries for your exploration phase`);
    } else {
      goalScore = 14;
    }

    // 4. Experience Level Match (Weight: 10%)
    const levelHierarchy: Record<string, number> = {
      Beginner: 1,
      Intermediate: 2,
      Advanced: 3
    };

    const userLvl = levelHierarchy[profile.experienceLevel] || 1;
    const careerLvl = levelHierarchy[career.difficulty] || 2;
    const diff = Math.abs(userLvl - careerLvl);

    let experienceScore = 10;
    if (diff === 0) {
      experienceScore = 10;
      reasons.push(`Ideal difficulty match for your ${profile.experienceLevel} background`);
    } else if (diff === 1) {
      experienceScore = 7.5;
      if (userLvl < careerLvl) {
        reasons.push(`Offers an achievable upward learning curve with structured step-by-step stages`);
      }
    } else {
      experienceScore = 5;
    }

    // 5. Work Style & Preferences Match (Weight: 10%)
    let preferenceScore = 6;
    if (career.workStyleFit && career.workStyleFit.includes(profile.workStyle)) {
      preferenceScore = 10;
      reasons.push(`Matches your preference for ${profile.workStyle} work environments`);
    } else {
      preferenceScore = 7;
    }

    // 6. Market Momentum & Baseline Growth (Weight: 5%)
    const marketScore = 4.8;

    // Total Calculation
    const totalRaw = interestScore + skillScore + goalScore + experienceScore + preferenceScore + marketScore;
    // Normalize to 45% - 98% range for realistic human perception
    const normalizedScore = Math.min(98, Math.max(42, Math.round(totalRaw)));

    // Ensure at least 3 distinct reasons
    if (reasons.length < 3) {
      reasons.push(`High domestic market demand in India with average salary of ${career.salaryRangeINR.averageDisplay}`);
    }
    if (reasons.length < 3) {
      reasons.push(`Includes full 5-stage actionable roadmap with curated free materials`);
    }

    return {
      ...career,
      matchScore: normalizedScore,
      matchReasons: reasons.slice(0, 4)
    };
  });

  // Sort descending by match score
  return scored.sort((a, b) => b.matchScore - a.matchScore);
}

export function searchCareersAndSkills(query: string, careers: Career[]): Career[] {
  if (!query || !query.trim()) return careers;
  const q = query.toLowerCase().trim();

  return careers.filter((career) => {
    const titleMatch = career.title.toLowerCase().includes(q);
    const categoryMatch = career.category.toLowerCase().includes(q);
    const summaryMatch = career.summary.toLowerCase().includes(q);
    const tagMatch = career.tags.some((t) => t.toLowerCase().includes(q));
    const roleMatch = career.jobRoles.some((r) => r.toLowerCase().includes(q));
    const skillMatch = career.requiredSkills.some((s) => s.name.toLowerCase().includes(q));
    const techMatch = career.technologies.some((t) => t.name.toLowerCase().includes(q));

    return titleMatch || categoryMatch || summaryMatch || tagMatch || roleMatch || skillMatch || techMatch;
  });
}
