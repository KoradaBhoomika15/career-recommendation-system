import React, { useState } from 'react';
import {
  Search,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Award,
  Layers,
  CheckCircle2,
  ExternalLink,
  BookOpen,
  Film,
  Cpu,
  GraduationCap,
  Briefcase
} from 'lucide-react';
import { allCareers } from '../../data/careersData';
import { searchCareersAndSkills } from '../../services/recommendationEngine';
import { useAuth } from '../../context/AuthContext';

interface LandingPageProps {
  onGetStarted: () => void;
  onExploreCareer: (careerId: string) => void;
  onSelectCategory: (category: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onGetStarted,
  onExploreCareer,
  onSelectCategory
}) => {
  const { currentUser } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const searchResults = searchQuery.trim()
    ? searchCareersAndSkills(searchQuery, allCareers).slice(0, 5)
    : [];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      onExploreCareer(searchResults[0].id);
    } else if (searchQuery.trim()) {
      onSelectCategory('all');
    }
  };

  const categories = [
    { label: 'Careers', icon: Briefcase, id: 'career' },
    { label: 'Courses', icon: GraduationCap, id: 'course' },
    { label: 'Technologies', icon: Cpu, id: 'technology' },
    { label: 'Books', icon: BookOpen, id: 'book' },
    { label: 'Movies & Media', icon: Film, id: 'movie' }
  ];

  const featuredCareers = allCareers.slice(0, 4);

  return (
    <div className="space-y-24 pb-20">
      {/* HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 lg:pt-24 text-center px-4 max-w-5xl mx-auto">
        {/* Subtle pill tag kicker */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-400/30 text-cyan-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} />
          <span>Next-Generation Career Recommendation Engine</span>
        </div>

        {/* Big Animated Hero Heading */}
        <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
          Discover Your Career Path.{' '}
          <span className="block mt-2 text-gradient-cyan">Powered by AI.</span>
        </h1>

        <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
          NEXORA maps your unique interests, current skills, and ambitions into structured
          5-stage roadmaps, free curated courses, and real market insights.
        </p>

        {/* Big Glowing Input Box */}
        <div className="mt-10 max-w-2xl mx-auto relative z-30">
          <form
            onSubmit={handleSearchSubmit}
            className={`relative flex items-center p-2 rounded-2xl glass-card transition-all duration-300 ${
              isFocused
                ? 'border-cyan-400 glow-cyan ring-1 ring-cyan-400/50 scale-[1.01]'
                : 'border-cyan-500/30 hover:border-cyan-400/50'
            }`}
          >
            <Search className="w-5 h-5 text-cyan-400 ml-3 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 250)}
              placeholder="What career or skill are you looking for today? (e.g. AI, Python, Design...)"
              className="w-full bg-transparent px-3 py-2 text-sm sm:text-base text-white placeholder-slate-400 focus:outline-none"
            />
            <button
              type="submit"
              className="hidden sm:flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-xs sm:text-sm shrink-0 shadow-md shadow-cyan-500/25 transition-all"
            >
              <span>Explore</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Instant Dropdown Search Suggestions */}
          {isFocused && searchResults.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 glass-modal rounded-2xl p-2 border border-cyan-400/40 shadow-2xl text-left z-50">
              <p className="text-[11px] font-semibold uppercase text-cyan-400 px-3 py-1 tracking-wider">
                Matching Career Paths & Skills
              </p>
              {searchResults.map((career) => (
                <button
                  key={career.id}
                  onClick={() => onExploreCareer(career.id)}
                  className="w-full px-3 py-2.5 rounded-xl hover:bg-cyan-500/15 flex items-center justify-between text-left transition-colors group"
                >
                  <div>
                    <p className="text-sm font-semibold text-white group-hover:text-cyan-300">
                      {career.title}
                    </p>
                    <p className="text-xs text-slate-400 truncate max-w-md">
                      {career.category} · {career.salaryRangeINR.averageDisplay}
                    </p>
                  </div>
                  <span className="text-xs text-cyan-400 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    View Roadmap <ArrowRight className="w-3 h-3" />
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* CTA Button */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onGetStarted}
            className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-600 hover:from-cyan-300 hover:to-indigo-500 text-slate-950 font-bold text-sm sm:text-base shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:scale-[1.02] transition-all flex items-center justify-center gap-2.5"
          >
            <Sparkles className="w-5 h-5 text-slate-950" />
            <span>Get Personalized Recommendations</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>

        {/* Category Chips */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <span className="text-xs text-slate-400 font-medium mr-1 hidden sm:inline">Explore by:</span>
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className="px-3.5 py-1.5 rounded-xl glass-card border border-cyan-500/20 hover:border-cyan-400/50 hover:bg-cyan-500/10 text-xs sm:text-sm text-slate-300 hover:text-white transition-all flex items-center gap-1.5"
              >
                <Icon className="w-3.5 h-3.5 text-cyan-400" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* STATS ROW */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl glass-card border border-cyan-500/20">
          {[
            { label: 'Verified Career Paths', value: '16+', sub: 'Tech, Creative & Business' },
            { label: 'Roadmap Milestones', value: '80+', sub: 'Structured 5-stage timelines' },
            { label: 'Match Precision', value: '94.8%', sub: 'Weighted algorithmic scoring' },
            { label: 'Curated Free Resources', value: '120+', sub: 'Harvard, freeCodeCamp, NPTEL' }
          ].map((stat, i) => (
            <div key={i} className="text-center p-3 border-r last:border-r-0 border-cyan-500/15">
              <p className="font-heading text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-400">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-white mt-1">{stat.label}</p>
              <p className="text-[11px] text-slate-400 mt-0.5">{stat.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS (3 STEPS) */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-widest text-cyan-400 font-bold mb-2">
            The NEXORA Method
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            How NEXORA Empowers Your Future
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Eliminate guesswork. Our content-based intelligence scores multi-dimensional vectors
            to deliver crystal-clear career certainty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              step: '01',
              title: 'Multi-Vector Profiling',
              desc: 'Select your natural interests and rate existing proficiencies on fine-grained sliders. Our system captures both technical strengths and interpersonal aptitudes.',
              icon: Layers
            },
            {
              step: '02',
              title: 'Algorithmic Content Matching',
              desc: 'Our engine applies weighted Jaccard similarity (30%), skill vector compatibility (25%), and career goals (20%) to rank over 15 distinct professions.',
              icon: TrendingUp
            },
            {
              step: '03',
              title: '5-Stage Milestone Roadmaps',
              desc: 'Receive immediate access to progressive timelines (Foundation to Job-Ready) with project blueprints, salary expectations in INR, and free university-grade materials.',
              icon: Award
            }
          ].map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className="relative rounded-2xl glass-card glass-card-hover p-6 sm:p-8 border border-cyan-500/20 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-heading text-3xl font-extrabold text-cyan-400/20">
                      {card.step}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SPOTLIGHT CAREERS PREVIEW */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-cyan-400 font-bold mb-1">
              Curated Career Blueprints
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Spotlight Pathways in High Demand
            </h2>
          </div>
          <button
            onClick={() => onSelectCategory('career')}
            className="text-xs sm:text-sm text-cyan-300 hover:text-cyan-200 font-medium flex items-center gap-1.5"
          >
            <span>Explore all 16 careers</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredCareers.map((c) => (
            <div
              key={c.id}
              className="rounded-2xl glass-card glass-card-hover p-5 border border-cyan-500/20 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-semibold text-cyan-300 uppercase tracking-wider">
                  {c.category}
                </span>
                <h3 className="font-heading text-base font-bold text-white mt-1 line-clamp-1">
                  {c.title}
                </h3>
                <p className="text-xs text-slate-300 mt-2 line-clamp-3 leading-relaxed">
                  {c.summary}
                </p>

                <div className="mt-4 pt-3 border-t border-cyan-500/15">
                  <p className="text-[11px] text-slate-400">Avg. Salary (India):</p>
                  <p className="text-xs font-bold text-cyan-200">
                    {c.salaryRangeINR.averageDisplay}
                  </p>
                </div>
              </div>

              <button
                onClick={() => onExploreCareer(c.id)}
                className="mt-4 w-full py-2 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-400/30 text-xs font-semibold text-cyan-200 flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>View 5-Stage Roadmap</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-cyan-500/15 pt-12 max-w-6xl mx-auto px-4 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8">
          <div className="space-y-1">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="font-heading font-bold text-lg text-white">NEXORA AI</span>
              <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300">
                Engine
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Personalized career recommendation & milestone engine. Free, client-side, zero ads.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-400">
            <button onClick={() => onSelectCategory('all')} className="hover:text-cyan-300">
              Directory
            </button>
            <button onClick={() => onExploreCareer('ai-ml-engineer')} className="hover:text-cyan-300">
              AI Roadmap
            </button>
            <button onClick={onGetStarted} className="hover:text-cyan-300">
              Match Engine
            </button>
          </div>
        </div>

        <div className="border-t border-cyan-500/10 py-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} NEXORA AI. All recommendations run locally with 100% data privacy.
        </div>
      </footer>
    </div>
  );
};
