import React, { useState } from 'react';
import {
  CheckCircle2,
  Circle,
  Clock,
  Sparkles,
  ExternalLink,
  ChevronDown,
  Briefcase,
  Heart,
  TrendingUp,
  Layers,
  ArrowRight,
  ShieldAlert,
  Award,
  BookOpen
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { allCareers, getCareerById } from '../../data/careersData';
import { Career } from '../../types';
import { SourceTag, ResourceLinkButton } from '../common/ResourceBadge';
import { getYouTubeProjectTutorialLink } from '../../utils/resourceLinks';

interface RoadmapPageProps {
  initialCareerId?: string;
  onSelectCareer?: (careerId: string) => void;
}

export const RoadmapPage: React.FC<RoadmapPageProps> = ({
  initialCareerId = 'ai-ml-engineer',
  onSelectCareer
}) => {
  const {
    completedStages,
    toggleStageCompletion,
    getStageProgress,
    toggleSaveItem,
    isItemSaved
  } = useAuth();

  const [selectedCareerId, setSelectedCareerId] = useState<string>(initialCareerId);

  const career: Career = getCareerById(selectedCareerId) || allCareers[0];
  const progress = getStageProgress(career.id);
  const isSaved = isItemSaved(career.id);

  const handleCareerChange = (id: string) => {
    setSelectedCareerId(id);
    if (onSelectCareer) onSelectCareer(id);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* HEADER & CAREER SELECTOR */}
      <div className="rounded-3xl glass-card p-6 sm:p-8 border border-cyan-400/25 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                {career.category}
              </span>
              <span className="text-xs text-slate-400">·</span>
              <span className="text-xs text-slate-300 font-medium">
                5-Stage Progressive Roadmap
              </span>
            </div>

            <h1 className="font-heading text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {career.title}
            </h1>

            <p className="text-sm text-cyan-100/75 max-w-2xl font-light leading-relaxed">
              {career.description}
            </p>
          </div>

          {/* Quick Career Switcher Dropdown */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative">
              <select
                value={selectedCareerId}
                onChange={(e) => handleCareerChange(e.target.value)}
                className="w-full sm:w-auto appearance-none pl-4 pr-10 py-2.5 rounded-xl glass-card border border-cyan-500/30 text-white text-xs sm:text-sm font-medium focus:outline-none focus:border-cyan-400 cursor-pointer bg-[#051333]"
              >
                {allCareers.map((c) => (
                  <option key={c.id} value={c.id} className="bg-slate-900 text-white">
                    {c.title}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-cyan-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            <button
              onClick={() => toggleSaveItem('career', career)}
              className={`p-2.5 rounded-xl border flex items-center justify-center gap-2 transition-all ${
                isSaved
                  ? 'border-rose-500 bg-rose-500/20 text-rose-400'
                  : 'border-cyan-500/30 glass-card text-slate-300 hover:text-rose-400 hover:border-rose-400/50'
              }`}
              aria-label="Save this career"
            >
              <Heart className={`w-4 h-4 ${isSaved ? 'fill-rose-400' : ''}`} />
              <span className="text-xs font-semibold sm:hidden">
                {isSaved ? 'Saved' : 'Save'}
              </span>
            </button>
          </div>
        </div>

        {/* SALARY & MARKET STATS STRIP */}
        <div className="mt-8 pt-6 border-t border-cyan-500/20 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-3.5 rounded-xl bg-slate-950/40 border border-cyan-500/15">
            <p className="text-[11px] text-slate-400 font-medium">Entry Level (0-2 yrs)</p>
            <p className="text-sm font-bold text-white mt-0.5">
              {career.salaryRangeINR.entry}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-400/30">
            <p className="text-[11px] text-cyan-300 font-medium">Mid Level (3-5 yrs)</p>
            <p className="text-base font-extrabold text-cyan-200 mt-0.5">
              {career.salaryRangeINR.mid}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/40 border border-cyan-500/15">
            <p className="text-[11px] text-slate-400 font-medium">Senior / Lead (5+ yrs)</p>
            <p className="text-sm font-bold text-emerald-300 mt-0.5">
              {career.salaryRangeINR.senior}
            </p>
          </div>
        </div>

        {/* TARGET JOB ROLES */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-xs text-slate-400 font-medium mr-1">Target Roles:</span>
          {career.jobRoles.map((role) => (
            <span
              key={role}
              className="text-xs px-2.5 py-1 rounded-lg bg-slate-900/80 border border-cyan-500/20 text-slate-200 font-medium"
            >
              {role}
            </span>
          ))}
        </div>
      </div>

      {/* OVERALL ROADMAP PROGRESS BAR */}
      <div className="rounded-2xl glass-card p-5 border border-cyan-400/25 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-cyan-400" />
            <h3 className="font-heading text-base font-bold text-white">
              Roadmap Mastery Progress
            </h3>
          </div>
          <p className="text-xs text-slate-300">
            {progress.completedCount} of {progress.totalCount} stages completed (
            {progress.percentage}%)
          </p>
        </div>

        <div className="w-full sm:w-64 h-3 rounded-full bg-slate-900 border border-cyan-500/25 overflow-hidden p-0.5">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 transition-all duration-500 shadow-sm shadow-cyan-400/50"
            style={{ width: `${progress.percentage}%` }}
          />
        </div>
      </div>

      {/* VERTICAL ANIMATED TIMELINE WITH GLOWING NODES */}
      <div className="relative pl-6 sm:pl-10 space-y-10">
        {/* Continuous Neon Vertical Line */}
        <div className="absolute left-2.5 sm:left-4 top-4 bottom-4 w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-indigo-600 rounded-full shadow-[0_0_12px_rgba(56,189,248,0.5)]" />

        {career.roadmap.map((stage) => {
          const isCompleted = (completedStages[career.id] || []).includes(stage.stageNumber);

          return (
            <div key={stage.stageNumber} className="relative group">
              {/* Glowing Timeline Node */}
              <button
                type="button"
                onClick={() => toggleStageCompletion(career.id, stage.stageNumber)}
                className={`absolute -left-6 sm:-left-10 top-5 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 z-10 ${
                  isCompleted
                    ? 'border-emerald-400 bg-emerald-500 text-slate-950 shadow-[0_0_16px_rgba(52,211,153,0.8)] scale-110'
                    : 'border-cyan-400 bg-slate-950 text-cyan-300 shadow-[0_0_12px_rgba(56,189,248,0.5)] hover:scale-110'
                }`}
                title="Click to toggle stage completion"
              >
                {isCompleted ? (
                  <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
                ) : (
                  <span className="font-heading font-extrabold text-xs">
                    {stage.stageNumber}
                  </span>
                )}
              </button>

              {/* Stage Card */}
              <div
                className={`rounded-2xl glass-card p-6 sm:p-7 border transition-all duration-300 ${
                  isCompleted
                    ? 'border-emerald-500/40 bg-[#07241d]/30'
                    : 'border-cyan-500/20 hover:border-cyan-400/40'
                }`}
              >
                {/* Header: Stage Title + Duration + Completion Checkbox */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-cyan-500/15">
                  <div>
                    <div className="flex items-center gap-2 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{stage.duration}</span>
                    </div>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
                      {stage.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-cyan-200/80 font-medium mt-0.5">
                      {stage.subtitle}
                    </p>
                  </div>

                  {/* Interactive Checkbox Button */}
                  <button
                    type="button"
                    onClick={() => toggleStageCompletion(career.id, stage.stageNumber)}
                    className={`self-start sm:self-center px-3.5 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-2 transition-all ${
                      isCompleted
                        ? 'border-emerald-400 bg-emerald-500/20 text-emerald-300 shadow-sm shadow-emerald-500/30'
                        : 'border-cyan-500/30 glass-card text-slate-300 hover:border-cyan-400 hover:text-white'
                    }`}
                  >
                    {isCompleted ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Stage Completed</span>
                      </>
                    ) : (
                      <>
                        <Circle className="w-4 h-4 text-slate-400" />
                        <span>Mark as Complete</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed font-light">
                  {stage.description}
                </p>

                {/* SKILLS TO LEARN CHIPS */}
                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
                    Core Skills & Toolsets to Master:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {stage.skillsToLearn.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-1 rounded-lg bg-cyan-950/60 border border-cyan-500/25 text-cyan-100 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* FREE COURSES & RESOURCES */}
                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2.5">
                    Free University & Community Resources:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {stage.resources.map((res, rIndex) => {
                      const platform = res.platform || res.provider;
                      const resourceLevel = res.level || (stage.stageNumber === 1 ? 'Beginner' : stage.stageNumber <= 3 ? 'Intermediate' : 'Advanced');
                      return (
                        <div
                          key={rIndex}
                          className="p-3.5 rounded-xl glass-card border border-cyan-500/20 hover:border-cyan-400/50 flex flex-col justify-between gap-2.5 transition-all group"
                        >
                          <div>
                            <div className="flex items-start justify-between gap-2 mb-1.5">
                              <SourceTag
                                platform={platform}
                                price={res.price || (res.free ? 'Free' : 'Paid')}
                                level={resourceLevel}
                                itemType="course"
                              />
                            </div>
                            <p className="text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                              {res.title}
                            </p>
                            <span className="text-[10px] text-cyan-300/80 font-medium mt-0.5 block">
                              Source: {res.provider}
                            </span>
                          </div>

                          <div className="pt-2 border-t border-cyan-500/10">
                            <ResourceLinkButton
                              title={res.title}
                              platform={platform}
                              directUrl={res.url || res.link}
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

                {/* MINI PROJECT IDEA CALLOUT BOX */}
                <div className="mt-5 p-4 rounded-xl bg-gradient-to-r from-blue-950/40 via-cyan-950/30 to-indigo-950/40 border border-cyan-400/30 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-cyan-300 uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Hands-On Milestone Project</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-100 font-medium">
                    {stage.projectIdea}
                  </p>

                  <div className="pt-2 border-t border-cyan-500/15 flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[11px] text-slate-300 font-light">
                      Need step-by-step guidance building this?
                    </span>
                    <a
                      href={getYouTubeProjectTutorialLink(stage.projectIdea)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-red-600/20 hover:bg-red-600/30 border border-red-500/40 text-red-200 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-[0_0_12px_rgba(239,68,68,0.25)] hover:shadow-[0_0_18px_rgba(239,68,68,0.4)]"
                    >
                      <span>▶️</span>
                      <span>Find tutorials on YouTube</span>
                      <ExternalLink className="w-3 h-3 text-red-300" />
                    </a>
                  </div>
                </div>

                {/* KEY DELIVERABLES */}
                <div className="mt-4 pt-3 border-t border-cyan-500/10">
                  <p className="text-[11px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                    Portfolio Deliverables to Prove Mastery:
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs text-slate-300">
                    {stage.keyDeliverables.map((del, dIdx) => (
                      <span key={dIdx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{del}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
