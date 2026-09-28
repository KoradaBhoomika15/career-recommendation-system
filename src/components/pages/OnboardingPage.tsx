import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Check,
  Plus,
  Sliders,
  Compass,
  Briefcase,
  Layers,
  Star,
  CheckCircle2
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { allInterestsList, defaultSkillsList } from '../../data/careersData';
import {
  UserProfile,
  CareerGoal,
  ExperienceLevel,
  WorkStyle,
  PreferredPace,
  SalaryPriority
} from '../../types';

interface OnboardingPageProps {
  onComplete: () => void;
}

export const OnboardingPage: React.FC<OnboardingPageProps> = ({ onComplete }) => {
  const { currentUser, updateProfile } = useAuth();

  const [step, setStep] = useState(1);
  const [selectedInterests, setSelectedInterests] = useState<string[]>(
    currentUser?.profile?.interests?.length
      ? currentUser.profile.interests
      : ['Technology', 'AI', 'Data']
  );

  const [skills, setSkills] = useState<Record<string, number>>(
    currentUser?.profile?.skills
      ? { ...currentUser.profile.skills }
      : {
          Python: 7,
          SQL: 6,
          Communication: 7,
          'Problem Solving': 8,
          Creativity: 6,
          Math: 6,
          Design: 5,
          Leadership: 5
        }
  );

  const [customSkillName, setCustomSkillName] = useState('');
  const [showAddCustom, setShowAddCustom] = useState(false);

  const [goal, setGoal] = useState<CareerGoal>(
    currentUser?.profile?.goal || 'Get a job'
  );
  const [experienceLevel, setExperienceLevel] = useState<ExperienceLevel>(
    currentUser?.profile?.experienceLevel || 'Intermediate'
  );
  const [workStyle, setWorkStyle] = useState<WorkStyle>(
    currentUser?.profile?.workStyle || 'Remote'
  );
  const [pace, setPace] = useState<PreferredPace>(
    currentUser?.profile?.pace || 'Balanced (10-15 hrs/wk)'
  );
  const [salaryPriority, setSalaryPriority] = useState<SalaryPriority>(
    currentUser?.profile?.salaryPriority || 'High Growth'
  );

  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  const handleSkillChange = (skillKey: string, value: number) => {
    setSkills((prev) => ({
      ...prev,
      [skillKey]: value
    }));
  };

  const handleAddCustomSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customSkillName.trim()) return;
    const cleanName = customSkillName.trim();
    if (!skills[cleanName]) {
      setSkills((prev) => ({
        ...prev,
        [cleanName]: 6
      }));
    }
    setCustomSkillName('');
    setShowAddCustom(false);
  };

  const handleFinish = () => {
    setIsSubmitting(true);
    const finalProfile: UserProfile = {
      interests: selectedInterests.length > 0 ? selectedInterests : ['Technology', 'Data'],
      skills,
      goal,
      experienceLevel,
      workStyle,
      pace,
      salaryPriority
    };

    setTimeout(() => {
      updateProfile(finalProfile);
      setIsSubmitting(false);
      onComplete();
    }, 600);
  };

  const skillLevelLabel = (val: number) => {
    if (val <= 2) return 'Beginner (0-2)';
    if (val <= 5) return 'Familiar (3-5)';
    if (val <= 8) return 'Proficient (6-8)';
    return 'Expert (9-10)';
  };

  const goalsList: { label: CareerGoal; desc: string; icon: string }[] = [
    { label: 'Get a job', desc: 'Secure an offer or transition into first industry role', icon: '🎯' },
    { label: 'Switch career', desc: 'Pivot from an existing background into a high-demand domain', icon: '🔄' },
    { label: 'Learn a skill', desc: 'Master specific high-leverage frameworks and toolsets', icon: '💡' },
    { label: 'Explore options', desc: 'Discover emerging high-paying career avenues that fit you', icon: '🧭' }
  ];

  const levelsList: { label: ExperienceLevel; desc: string }[] = [
    { label: 'Beginner', desc: '0 - 1 years experience or completely new to the domain' },
    { label: 'Intermediate', desc: '1 - 3 years experience or solid foundation in basics' },
    { label: 'Advanced', desc: '3+ years experience looking to specialize or reach lead roles' }
  ];

  const workStylesList: { label: WorkStyle; desc: string; icon: string }[] = [
    { label: 'Remote', desc: 'Work from anywhere with location flexibility', icon: '🏠' },
    { label: 'Hybrid', desc: 'Balance of home focus and in-person team energy', icon: '🏢' },
    { label: 'Office', desc: 'Direct in-person physical collaboration and mentoring', icon: '🏙️' }
  ];

  const pacesList: PreferredPace[] = [
    'Intensive (20+ hrs/wk)',
    'Balanced (10-15 hrs/wk)',
    'Relaxed (5 hrs/wk)'
  ];

  const prioritiesList: SalaryPriority[] = [
    'High Growth',
    'Immediate Stability',
    'Work-Life Balance'
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl glass-modal rounded-3xl p-6 sm:p-10 border border-cyan-400/30 shadow-2xl relative overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-cyan-500/20 to-transparent blur-2xl pointer-events-none" />

        {/* Progress Bar & Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs sm:text-sm font-medium text-slate-400 mb-3">
            <span className="text-cyan-300 flex items-center gap-1.5 font-heading">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              NEXORA PROFILE BUILDER
            </span>
            <span className="text-slate-300 font-medium">
              Step {step} of 4 · {Math.round((step / 4) * 100)}% Complete
            </span>
          </div>

          <div className="w-full h-2 rounded-full bg-slate-800/80 overflow-hidden p-0.5 border border-cyan-500/20">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 transition-all duration-500 ease-out shadow-sm shadow-cyan-400/50"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>

        {/* STEP 1: INTERESTS */}
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                What fields spark your curiosity?
              </h2>
              <p className="text-sm text-cyan-200/70 mt-1.5">
                Select at least 2 interests. NEXORA uses these to filter career fields that match your natural passions.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 pt-2">
              {allInterestsList.map((interest) => {
                const isSelected = selectedInterests.includes(interest);
                return (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => toggleInterest(interest)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-2 border ${
                      isSelected
                        ? 'bg-gradient-to-r from-cyan-500/30 to-blue-600/30 border-cyan-400 text-white shadow-md shadow-cyan-500/20'
                        : 'glass-card border-cyan-500/20 text-slate-300 hover:text-white hover:border-cyan-400/50'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center border text-[10px] ${
                        isSelected
                          ? 'border-cyan-400 bg-cyan-400 text-slate-950 font-bold'
                          : 'border-slate-500 bg-slate-800'
                      }`}
                    >
                      {isSelected ? <Check className="w-3 h-3 stroke-[3]" /> : null}
                    </div>
                    <span>{interest}</span>
                  </button>
                );
              })}
            </div>

            <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs text-cyan-200/80 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>
                Selected {selectedInterests.length} of {allInterestsList.length} interests. You can modify these anytime in your profile!
              </span>
            </div>
          </div>
        )}

        {/* STEP 2: SKILLS */}
        {step === 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Rate your current skill proficiencies
                </h2>
                <p className="text-sm text-cyan-200/70 mt-1">
                  Adjust sliders from 0 (never used) to 10 (expert). Be honest—roadmaps bridge the gap!
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowAddCustom(!showAddCustom)}
                className="self-start sm:self-auto px-3 py-1.5 rounded-lg border border-cyan-400/40 text-xs font-medium text-cyan-300 hover:bg-cyan-500/10 flex items-center gap-1.5 transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Custom Skill</span>
              </button>
            </div>

            {/* Custom Skill Adder */}
            {showAddCustom && (
              <form
                onSubmit={handleAddCustomSkill}
                className="p-3.5 rounded-xl glass-card border border-cyan-400/30 flex items-center gap-2 animate-in fade-in duration-200"
              >
                <input
                  type="text"
                  value={customSkillName}
                  onChange={(e) => setCustomSkillName(e.target.value)}
                  placeholder="e.g. Docker, Figma, Public Speaking..."
                  className="flex-1 px-3 py-1.5 bg-slate-900/80 rounded-lg border border-cyan-500/30 text-white text-xs focus:outline-none focus:border-cyan-400"
                  autoFocus
                />
                <button
                  type="submit"
                  className="px-3.5 py-1.5 rounded-lg bg-cyan-500 text-slate-950 font-semibold text-xs hover:bg-cyan-400 transition-colors"
                >
                  Add
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddCustom(false)}
                  className="px-2 py-1 text-xs text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
              </form>
            )}

            {/* Skill Sliders Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[420px] overflow-y-auto pr-1">
              {Object.entries(skills).map(([skillName, level]) => (
                <div
                  key={skillName}
                  className="p-3.5 rounded-xl glass-card border border-cyan-500/15 hover:border-cyan-400/30 transition-all space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-white">{skillName}</span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      {level}/10 · {skillLevelLabel(level)}
                    </span>
                  </div>

                  <input
                    type="range"
                    min="0"
                    max="10"
                    step="1"
                    value={level}
                    onChange={(e) => handleSkillChange(skillName, parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>0: Novice</span>
                    <span>5: Mid</span>
                    <span>10: Expert</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3: GOALS & EXPERIENCE */}
        {step === 3 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                What is your primary career objective?
              </h2>
              <p className="text-sm text-cyan-200/70 mt-1">
                Tell us where you are headed and your current overall professional experience level.
              </p>
            </div>

            {/* Goals Radio Cards */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2.5">
                Primary Goal
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {goalsList.map((g) => (
                  <button
                    key={g.label}
                    type="button"
                    onClick={() => setGoal(g.label)}
                    className={`p-3.5 rounded-xl text-left border transition-all flex items-start gap-3 ${
                      goal === g.label
                        ? 'bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border-cyan-400 text-white shadow-md shadow-cyan-500/15'
                        : 'glass-card border-cyan-500/20 text-slate-300 hover:border-cyan-400/40'
                    }`}
                  >
                    <span className="text-2xl">{g.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-white">{g.label}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{g.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Experience Level Selector */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2.5">
                Current Experience Level
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {levelsList.map((lvl) => (
                  <button
                    key={lvl.label}
                    type="button"
                    onClick={() => setExperienceLevel(lvl.label)}
                    className={`p-3.5 rounded-xl text-left border transition-all ${
                      experienceLevel === lvl.label
                        ? 'bg-gradient-to-br from-cyan-500/25 to-blue-600/20 border-cyan-400 text-white shadow-md shadow-cyan-500/15'
                        : 'glass-card border-cyan-500/20 text-slate-300 hover:border-cyan-400/40'
                    }`}
                  >
                    <p className="text-sm font-semibold text-white">{lvl.label}</p>
                    <p className="text-xs text-slate-400 mt-1">{lvl.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: PREFERENCES */}
        {step === 4 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Work style & roadmap preferences
              </h2>
              <p className="text-sm text-cyan-200/70 mt-1">
                Fine-tune your learning speed and environment preferences to complete your profile.
              </p>
            </div>

            {/* Work Style */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2.5">
                Preferred Work Arrangement
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {workStylesList.map((ws) => (
                  <button
                    key={ws.label}
                    type="button"
                    onClick={() => setWorkStyle(ws.label)}
                    className={`p-3 rounded-xl text-left border transition-all flex items-center gap-3 ${
                      workStyle === ws.label
                        ? 'bg-gradient-to-br from-cyan-500/25 to-blue-600/20 border-cyan-400 text-white shadow-md shadow-cyan-500/15'
                        : 'glass-card border-cyan-500/20 text-slate-300 hover:border-cyan-400/40'
                    }`}
                  >
                    <span className="text-2xl">{ws.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-white">{ws.label}</p>
                      <p className="text-xs text-slate-400">{ws.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Study Pace */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2.5">
                Weekly Study / Upskilling Commitment
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {pacesList.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPace(p)}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      pace === p
                        ? 'bg-gradient-to-br from-cyan-500/25 to-blue-600/20 border-cyan-400 text-white shadow-md shadow-cyan-500/15'
                        : 'glass-card border-cyan-500/20 text-slate-300 hover:border-cyan-400/40'
                    }`}
                  >
                    <p className="text-sm font-semibold text-white">{p}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Salary / Value Priority */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2.5">
                Career Trajectory Priority
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {prioritiesList.map((pri) => (
                  <button
                    key={pri}
                    type="button"
                    onClick={() => setSalaryPriority(pri)}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      salaryPriority === pri
                        ? 'bg-gradient-to-br from-cyan-500/25 to-blue-600/20 border-cyan-400 text-white shadow-md shadow-cyan-500/15'
                        : 'glass-card border-cyan-500/20 text-slate-300 hover:border-cyan-400/40'
                    }`}
                  >
                    <p className="text-sm font-semibold text-white">{pri}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="mt-8 pt-5 border-t border-cyan-500/20 flex items-center justify-between">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              className="px-4 py-2 rounded-xl text-slate-300 hover:text-white glass-card text-sm font-medium flex items-center gap-1.5 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {step < 4 ? (
            <button
              type="button"
              onClick={() => setStep((s) => s + 1)}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-sm font-medium shadow-md shadow-cyan-500/25 flex items-center gap-2 group transition-all"
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          ) : (
            <button
              type="button"
              disabled={isSubmitting}
              onClick={handleFinish}
              className="px-7 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-600 hover:from-cyan-300 hover:to-indigo-500 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/30 flex items-center gap-2 transition-all disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                  <span>Computing Optimal Matches...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-slate-950" />
                  <span>Build My Recommendation Profile</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
