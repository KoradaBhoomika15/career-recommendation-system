import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  Heart,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Film,
  Cpu,
  GraduationCap,
  ExternalLink,
  Sliders,
  TrendingUp,
  MapPin,
  Clock,
  Briefcase
} from 'lucide-react';
import { useAuth, defaultDemoProfile } from '../../context/AuthContext';
import { allCareers } from '../../data/careersData';
import { computeRecommendations, ScoredCareer } from '../../services/recommendationEngine';
import { Career } from '../../types';
import { SourceTag, ResourceLinkButton } from '../common/ResourceBadge';

interface DashboardPageProps {
  onExploreCareer: (careerId: string) => void;
  onEditProfile: () => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({
  onExploreCareer,
  onEditProfile
}) => {
  const { currentUser, toggleSaveItem, isItemSaved } = useAuth();
  const [selectedField, setSelectedField] = useState<string>('All');

  // Time of day greeting
  const greeting = useMemo(() => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  }, []);

  const userProfile = currentUser?.profile || defaultDemoProfile;

  // Compute recommendations with content-based filtering
  const recommendations: ScoredCareer[] = useMemo(() => {
    return computeRecommendations(userProfile, allCareers);
  }, [userProfile]);

  // Filtered by category tab
  const filteredRecommendations = useMemo(() => {
    if (selectedField === 'All') return recommendations;
    return recommendations.filter((c) => c.field.toLowerCase().includes(selectedField.toLowerCase()));
  }, [recommendations, selectedField]);

  const topCareer = recommendations[0] || allCareers[0];
  const [activeCareerId, setActiveCareerId] = useState<string>(topCareer.id);

  const activeCareer = useMemo(() => {
    return recommendations.find((c) => c.id === activeCareerId) || topCareer;
  }, [recommendations, activeCareerId, topCareer]);

  // Match % circular SVG component
  const MatchRing: React.FC<{ score: number; size?: number }> = ({ score, size = 68 }) => {
    const strokeWidth = 5.5;
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDashoffset = circumference - (score / 100) * circumference;

    return (
      <div className="relative flex items-center justify-center shrink-0" style={{ width: size, height: size }}>
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(56, 189, 248, 0.15)"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="url(#matchGrad)"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
          <defs>
            <linearGradient id="matchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-sm sm:text-base font-extrabold text-white font-heading">
            {score}%
          </span>
          <span className="text-[9px] uppercase tracking-wider text-cyan-300 font-semibold -mt-1">
            Match
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Top Greeting & Profile Summary Banner */}
      <div className="relative rounded-3xl glass-card p-6 sm:p-8 border border-cyan-400/25 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>NEXORA AI Engine Active</span>
            </div>
            <h1 className="font-heading text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {greeting}, {currentUser?.name || 'Explorer'}!
            </h1>
            <p className="text-sm text-cyan-100/70 mt-1 max-w-2xl font-light">
              Here are your high-confidence career matches based on {userProfile.interests.length} interests,{' '}
              {Object.keys(userProfile.skills).length} evaluated skills, and your target to "{userProfile.goal}".
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <button
              onClick={onEditProfile}
              className="px-4 py-2 rounded-xl glass-card hover:border-cyan-400/50 text-xs sm:text-sm font-medium text-cyan-200 flex items-center gap-2 transition-all"
            >
              <Sliders className="w-4 h-4 text-cyan-400" />
              <span>Tune Skill Weights</span>
            </button>

            <button
              onClick={() => onExploreCareer(topCareer.id)}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs sm:text-sm font-medium shadow-md shadow-cyan-500/25 flex items-center gap-2 transition-all"
            >
              <span>Explore Top Match Roadmap</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* FIELD FILTER TABS */}
      <div className="flex items-center justify-between flex-wrap gap-4 border-b border-cyan-500/15 pb-4">
        <div>
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight">
            Top Recommended Career Paths
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Ranked by multi-factor algorithmic alignment with your profile
          </p>
        </div>

        <div className="flex items-center gap-1.5 p-1 bg-slate-900/60 rounded-xl border border-cyan-500/20 overflow-x-auto">
          {['All', 'Data & AI', 'Technical', 'Business', 'Creative'].map((field) => (
            <button
              key={field}
              onClick={() => setSelectedField(field)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all shrink-0 ${
                selectedField === field
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {field}
            </button>
          ))}
        </div>
      </div>

      {/* TOP CAREER CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecommendations.slice(0, 6).map((career, index) => {
          const isSaved = isItemSaved(career.id);
          const isSelected = career.id === activeCareerId;

          return (
            <div
              key={career.id}
              onClick={() => setActiveCareerId(career.id)}
              className={`relative rounded-2xl glass-card p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer border ${
                isSelected
                  ? 'border-cyan-400 glow-cyan ring-1 ring-cyan-400/40 bg-[#091b42]/70'
                  : 'border-cyan-500/20 hover:border-cyan-400/40 hover:-translate-y-1'
              }`}
            >
              <div>
                {/* Header: Rank + Match Ring + Heart */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 font-heading font-bold text-xs flex items-center justify-center border border-cyan-400/30">
                      #{index + 1}
                    </span>
                    <span className="text-xs font-medium text-cyan-300">
                      {career.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <MatchRing score={career.matchScore || 85} size={58} />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSaveItem('career', career);
                      }}
                      className={`p-2 rounded-full border transition-all ${
                        isSaved
                          ? 'border-rose-500 bg-rose-500/20 text-rose-400'
                          : 'border-cyan-500/20 bg-slate-900/60 text-slate-400 hover:text-rose-400 hover:border-rose-400/40'
                      }`}
                      aria-label="Save career"
                    >
                      <Heart className={`w-4 h-4 ${isSaved ? 'fill-rose-400' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Career Title & Summary */}
                <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                  {career.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4">
                  {career.summary}
                </p>

                {/* WHY NEXORA RECOMMENDED THIS SECTION (Green checkmarks) */}
                <div className="p-3 rounded-xl bg-slate-950/50 border border-cyan-500/15 mb-4 space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                    <Sparkles className="w-3 h-3 text-emerald-400" />
                    <span>Why NEXORA Recommended This</span>
                  </div>
                  <ul className="space-y-1.5">
                    {(career.matchReasons || []).slice(0, 3).map((reason, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Meta details: Salary & Roles */}
                <div className="flex items-center justify-between text-xs py-2 border-t border-cyan-500/15">
                  <span className="text-slate-400">Avg. Salary (India):</span>
                  <span className="font-bold text-cyan-200">
                    {career.salaryRangeINR.averageDisplay}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 pt-3 flex items-center gap-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onExploreCareer(career.id);
                  }}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs shadow-md shadow-cyan-500/25 flex items-center justify-center gap-1.5 transition-all"
                >
                  <span>Explore 5-Stage Roadmap</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* SELECTED CAREER TAILORED RESOURCES SECTION (Horizontal Rows) */}
      <section className="rounded-3xl glass-card p-6 sm:p-8 border border-cyan-400/25 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-cyan-500/20 pb-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Deep-Dive Learning Ecosystem</span>
            </div>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-white mt-1">
              Curated Resources for {activeCareer.title}
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Top free courses, core technologies, foundational literature, and inspiring media.
            </p>
          </div>

          <button
            onClick={() => onExploreCareer(activeCareer.id)}
            className="self-start sm:self-auto px-4 py-2 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-400/30 text-xs font-semibold text-cyan-200 flex items-center gap-1.5 transition-colors"
          >
            <span>Open Detailed Roadmap</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 1. RECOMMENDED COURSES ROW */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-bold text-white font-heading">
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <span>Recommended Free Courses & Certifications</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {activeCareer.courses.map((course) => {
              const isSaved = isItemSaved(course.id);
              const platform = course.platform || course.provider;
              return (
                <div
                  key={course.id}
                  className="rounded-xl glass-card p-4 border border-cyan-500/15 flex flex-col justify-between hover:border-cyan-400/40 transition-all group"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <SourceTag
                        platform={platform}
                        price={course.price || (course.isFree ? 'Free' : 'Paid')}
                        level={course.level}
                        itemType="course"
                      />
                      <button
                        onClick={() => toggleSaveItem('course', course)}
                        className="text-slate-400 hover:text-rose-400 transition-colors shrink-0 p-1"
                        aria-label="Save course"
                      >
                        <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-rose-400 text-rose-400' : ''}`} />
                      </button>
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                      {course.title}
                    </h4>
                    <p className="text-[11px] text-slate-300 mt-1 line-clamp-2">
                      {course.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-cyan-500/10 flex flex-col gap-2">
                    <span className="text-[11px] text-slate-400 font-medium">Duration: {course.duration}</span>
                    <ResourceLinkButton
                      title={course.title}
                      platform={platform}
                      directUrl={course.link}
                      itemType="course"
                      size="sm"
                      className="w-full"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. TECHNOLOGIES TO LEARN ROW */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-bold text-white font-heading">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>Core Technologies & Toolsets</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {activeCareer.technologies.map((tech) => {
              const isSaved = isItemSaved(tech.id);
              const difficultyLevel = tech.learningCurve === 'High' ? 'Advanced' : tech.learningCurve === 'Medium' ? 'Intermediate' : 'Beginner';
              return (
                <div
                  key={tech.id}
                  className="rounded-xl glass-card p-4 border border-cyan-500/15 flex flex-col justify-between hover:border-cyan-400/40 transition-all"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <SourceTag
                        platform="Official Docs"
                        price="Free"
                        level={difficultyLevel}
                        itemType="technology"
                      />
                      <button
                        onClick={() => toggleSaveItem('technology', tech)}
                        className="text-slate-400 hover:text-rose-400 transition-colors shrink-0 p-1"
                        aria-label="Save tech"
                      >
                        <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-rose-400 text-rose-400' : ''}`} />
                      </button>
                    </div>

                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] text-cyan-300/80 font-medium">
                        {tech.category}
                      </span>
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold text-white">{tech.name}</h4>
                    <p className="text-[11px] text-slate-300 mt-1 line-clamp-2">
                      {tech.whyImportant}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-cyan-500/10 flex flex-col gap-2">
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>Curve: {tech.learningCurve}</span>
                      <span className="text-cyan-300 font-semibold">{tech.popularity}% adoption</span>
                    </div>
                    <ResourceLinkButton
                      title={`${tech.name} documentation guide`}
                      platform="officialdocs"
                      itemType="technology"
                      customLabel="Read Documentation"
                      size="sm"
                      className="w-full"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. BOOKS ROW */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-bold text-white font-heading">
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span>Essential Books & Literature</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {activeCareer.books.map((book) => {
              const isSaved = isItemSaved(book.id);
              return (
                <div
                  key={book.id}
                  className="rounded-xl glass-card p-4 border border-cyan-500/15 flex flex-col justify-between hover:border-cyan-400/40 transition-all"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <SourceTag
                        platform="Google Books"
                        price="Paid"
                        level="Recommended"
                        itemType="book"
                      />
                      <button
                        onClick={() => toggleSaveItem('book', book)}
                        className="text-slate-400 hover:text-rose-400 transition-colors shrink-0 p-1"
                        aria-label="Save book"
                      >
                        <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-rose-400 text-rose-400' : ''}`} />
                      </button>
                    </div>

                    <span className="text-[10px] text-cyan-300/80 font-medium">
                      by {book.author} ({book.year})
                    </span>

                    <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-1 mt-0.5">
                      {book.title}
                    </h4>
                    <p className="text-[11px] text-slate-300 mt-1 line-clamp-2">
                      {book.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-cyan-500/10 flex flex-col gap-2">
                    <p className="text-[10px] text-cyan-200/90 italic line-clamp-1">
                      Key Takeaway: "{book.keyTakeaway}"
                    </p>
                    <ResourceLinkButton
                      title={book.title}
                      platform="googlebooks"
                      itemType="book"
                      customLabel="Find on Google Books"
                      size="sm"
                      className="w-full"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. MOVIES & SHOWS ROW */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-bold text-white font-heading">
            <Film className="w-4 h-4 text-cyan-400" />
            <span>Inspiring Cinema & Documentaries</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {activeCareer.movies.map((media) => {
              const isSaved = isItemSaved(media.id);
              return (
                <div
                  key={media.id}
                  className="rounded-xl glass-card p-4 border border-cyan-500/15 flex flex-col justify-between hover:border-cyan-400/40 transition-all"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <SourceTag
                        platform="Netflix"
                        price="Paid"
                        level={media.type}
                        itemType="movie"
                      />
                      <button
                        onClick={() => toggleSaveItem('movie', media)}
                        className="text-slate-400 hover:text-rose-400 transition-colors shrink-0 p-1"
                        aria-label="Save media"
                      >
                        <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-rose-400 text-rose-400' : ''}`} />
                      </button>
                    </div>

                    <div className="flex items-center gap-1.5 text-[10px] text-cyan-300 font-medium">
                      <span>{media.type}</span>
                      <span>·</span>
                      <span>{media.year}</span>
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold text-white mt-0.5">{media.title}</h4>
                    <p className="text-[11px] text-slate-300 mt-1 line-clamp-2">
                      {media.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-cyan-500/10 flex flex-col gap-2">
                    <p className="text-[10px] text-cyan-300 font-medium line-clamp-1">
                      Why watch: {media.relevance}
                    </p>
                    <ResourceLinkButton
                      title={`${media.title} ${media.type}`}
                      platform="netflix"
                      itemType="movie"
                      customLabel="Stream / Watch Title"
                      size="sm"
                      className="w-full"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
