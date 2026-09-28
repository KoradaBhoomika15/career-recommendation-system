import React, { useState } from 'react';
import {
  User as UserIcon,
  Sliders,
  Sparkles,
  History,
  CheckCircle2,
  Save,
  Plus,
  ArrowRight,
  RefreshCw,
  Clock,
  Layers
} from 'lucide-react';
import { useAuth, defaultDemoProfile } from '../../context/AuthContext';
import { allInterestsList } from '../../data/careersData';
import {
  UserProfile,
  CareerGoal,
  ExperienceLevel,
  WorkStyle,
  PreferredPace,
  SalaryPriority
} from '../../types';

interface ProfilePageProps {
  onGoToDashboard: () => void;
  onExploreCareer: (careerId: string) => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({
  onGoToDashboard,
  onExploreCareer
}) => {
  const { currentUser, updateProfile, history } = useAuth();
  const activeProfile = currentUser?.profile || defaultDemoProfile;

  const [interests, setInterests] = useState<string[]>(activeProfile.interests || []);
  const [skills, setSkills] = useState<Record<string, number>>({ ...activeProfile.skills });
  const [goal, setGoal] = useState<CareerGoal>(activeProfile.goal || 'Get a job');
  const [experienceLevel, setExperienceLevel] = useState<ExperienceLevel>(
    activeProfile.experienceLevel || 'Intermediate'
  );
  const [workStyle, setWorkStyle] = useState<WorkStyle>(activeProfile.workStyle || 'Remote');
  const [pace, setPace] = useState<PreferredPace>(
    activeProfile.pace || 'Balanced (10-15 hrs/wk)'
  );
  const [salaryPriority, setSalaryPriority] = useState<SalaryPriority>(
    activeProfile.salaryPriority || 'High Growth'
  );

  const [customSkillName, setCustomSkillName] = useState('');
  const [showAddCustom, setShowAddCustom] = useState(false);
  const [savedFeedback, setSavedFeedback] = useState(false);

  const toggleInterest = (interest: string) => {
    setInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  const handleSkillChange = (key: string, val: number) => {
    setSkills((prev) => ({
      ...prev,
      [key]: val
    }));
  };

  const handleAddCustomSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customSkillName.trim()) return;
    const clean = customSkillName.trim();
    if (!skills[clean]) {
      setSkills((prev) => ({
        ...prev,
        [clean]: 6
      }));
    }
    setCustomSkillName('');
    setShowAddCustom(false);
  };

  const handleSave = () => {
    const updated: UserProfile = {
      interests: interests.length > 0 ? interests : ['Technology'],
      skills,
      goal,
      experienceLevel,
      workStyle,
      pace,
      salaryPriority
    };

    updateProfile(updated);
    setSavedFeedback(true);
    setTimeout(() => setSavedFeedback(false), 3000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Header Banner */}
      <div className="rounded-3xl glass-card p-6 sm:p-8 border border-cyan-400/25 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-cyan-500/30">
            {currentUser?.name ? currentUser.name.charAt(0).toUpperCase() : 'U'}
          </div>
          <div>
            <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
              {currentUser?.name || 'Explorer Profile'}
            </h1>
            <p className="text-xs sm:text-sm text-cyan-200/80">
              {currentUser?.email || 'Guest Session'}
            </p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300">
                {experienceLevel}
              </span>
              <span className="text-xs text-slate-400">·</span>
              <span className="text-xs text-slate-300 font-medium">{goal}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleSave}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-cyan-500/30 flex items-center gap-2 transition-all"
          >
            <Save className="w-4 h-4" />
            <span>Save & Recalculate</span>
          </button>
          <button
            onClick={onGoToDashboard}
            className="px-4 py-2.5 rounded-xl glass-card text-xs sm:text-sm font-semibold text-cyan-200 hover:border-cyan-400/50 flex items-center gap-1.5 transition-colors"
          >
            <span>View Matches</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Success Banner */}
      {savedFeedback && (
        <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 text-sm flex items-center gap-3 animate-in fade-in duration-200">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <div>
            <p className="font-bold text-white">Profile Synchronized!</p>
            <p className="text-xs text-emerald-300">
              Recommendation engine weights have been updated. All career match scores recalculated!
            </p>
          </div>
        </div>
      )}

      {/* Section 1: Interests */}
      <section className="rounded-3xl glass-card p-6 sm:p-8 border border-cyan-500/20 space-y-4">
        <div>
          <h2 className="font-heading text-xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span>Passions & Interests (Weight: 30%)</span>
          </h2>
          <p className="text-xs text-slate-300 mt-0.5">
            Click to toggle which domains NEXORA prioritizes when ranking career fields.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {allInterestsList.map((interest) => {
            const isSelected = interests.includes(interest);
            return (
              <button
                key={interest}
                onClick={() => toggleInterest(interest)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all border ${
                  isSelected
                    ? 'bg-cyan-500/30 border-cyan-400 text-white shadow-sm shadow-cyan-500/20'
                    : 'glass-card border-cyan-500/20 text-slate-300 hover:text-white hover:border-cyan-400/40'
                }`}
              >
                {interest} {isSelected ? '✓' : ''}
              </button>
            );
          })}
        </div>
      </section>

      {/* Section 2: Skills Sliders */}
      <section className="rounded-3xl glass-card p-6 sm:p-8 border border-cyan-500/20 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="font-heading text-xl font-bold text-white flex items-center gap-2">
              <Sliders className="w-5 h-5 text-cyan-400" />
              <span>Skill Competency Levels (Weight: 25%)</span>
            </h2>
            <p className="text-xs text-slate-300 mt-0.5">
              Fine-tune proficiency ratings to guide algorithmic compatibility.
            </p>
          </div>

          <button
            onClick={() => setShowAddCustom(!showAddCustom)}
            className="self-start sm:self-auto px-3.5 py-1.5 rounded-lg border border-cyan-400/40 text-xs font-semibold text-cyan-300 hover:bg-cyan-500/10 flex items-center gap-1.5 transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Custom Skill</span>
          </button>
        </div>

        {/* Add custom skill inline */}
        {showAddCustom && (
          <form
            onSubmit={handleAddCustomSkill}
            className="p-3 rounded-xl glass-card border border-cyan-400/30 flex items-center gap-2"
          >
            <input
              type="text"
              value={customSkillName}
              onChange={(e) => setCustomSkillName(e.target.value)}
              placeholder="e.g. Kotlin, Marketing, Negotiation..."
              className="flex-1 px-3 py-1.5 bg-slate-900 rounded-lg border border-cyan-500/30 text-white text-xs focus:outline-none focus:border-cyan-400"
              autoFocus
            />
            <button
              type="submit"
              className="px-3 py-1.5 bg-cyan-500 text-slate-950 font-bold text-xs rounded-lg hover:bg-cyan-400"
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

        {/* Sliders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Object.entries(skills).map(([skillKey, level]) => (
            <div
              key={skillKey}
              className="p-3.5 rounded-xl glass-card border border-cyan-500/15 space-y-2"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-white">{skillKey}</span>
                <span className="text-cyan-300 font-bold px-2 py-0.5 rounded-full bg-cyan-500/20">
                  {level} / 10
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                step="1"
                value={level}
                onChange={(e) => handleSkillChange(skillKey, parseInt(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Goals & Logistics */}
      <section className="rounded-3xl glass-card p-6 sm:p-8 border border-cyan-500/20 space-y-6">
        <h2 className="font-heading text-xl font-bold text-white flex items-center gap-2">
          <Layers className="w-5 h-5 text-cyan-400" />
          <span>Goals & Environment Fit (Weight: 45%)</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase text-cyan-400 mb-1.5">
              Primary Goal
            </label>
            <select
              value={goal}
              onChange={(e) => setGoal(e.target.value as CareerGoal)}
              className="w-full py-2 px-3 rounded-xl glass-card border border-cyan-500/25 text-white text-xs focus:outline-none focus:border-cyan-400 bg-[#051333]"
            >
              <option value="Get a job">Get a job</option>
              <option value="Switch career">Switch career</option>
              <option value="Learn a skill">Learn a skill</option>
              <option value="Explore options">Explore options</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-cyan-400 mb-1.5">
              Experience Level
            </label>
            <select
              value={experienceLevel}
              onChange={(e) => setExperienceLevel(e.target.value as ExperienceLevel)}
              className="w-full py-2 px-3 rounded-xl glass-card border border-cyan-500/25 text-white text-xs focus:outline-none focus:border-cyan-400 bg-[#051333]"
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-cyan-400 mb-1.5">
              Work Arrangement
            </label>
            <select
              value={workStyle}
              onChange={(e) => setWorkStyle(e.target.value as WorkStyle)}
              className="w-full py-2 px-3 rounded-xl glass-card border border-cyan-500/25 text-white text-xs focus:outline-none focus:border-cyan-400 bg-[#051333]"
            >
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Office">Office</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-cyan-400 mb-1.5">
              Salary Priority
            </label>
            <select
              value={salaryPriority}
              onChange={(e) => setSalaryPriority(e.target.value as SalaryPriority)}
              className="w-full py-2 px-3 rounded-xl glass-card border border-cyan-500/25 text-white text-xs focus:outline-none focus:border-cyan-400 bg-[#051333]"
            >
              <option value="High Growth">High Growth</option>
              <option value="Immediate Stability">Immediate Stability</option>
              <option value="Work-Life Balance">Work-Life Balance</option>
            </select>
          </div>
        </div>
      </section>

      {/* Section 4: Recommendation History */}
      <section className="rounded-3xl glass-card p-6 sm:p-8 border border-cyan-500/20 space-y-4">
        <div>
          <h2 className="font-heading text-xl font-bold text-white flex items-center gap-2">
            <History className="w-5 h-5 text-cyan-400" />
            <span>Recommendation History & Audit Log</span>
          </h2>
          <p className="text-xs text-slate-300 mt-0.5">
            Snapshot history tracking your iterative profile calibrations and skill adjustments.
          </p>
        </div>

        {history.length === 0 ? (
          <p className="text-xs text-slate-400 italic">
            No profile modifications logged yet. Click "Save & Recalculate" above to record a milestone snapshot.
          </p>
        ) : (
          <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
            {history.map((entry) => (
              <div
                key={entry.id}
                className="p-3.5 rounded-xl bg-slate-950/40 border border-cyan-500/15 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
              >
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="text-slate-300 font-semibold">{entry.timestamp}</span>
                  <span className="text-slate-500">·</span>
                  <span className="text-slate-400">
                    Evaluated with {entry.interestsCount} interests
                  </span>
                </div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  {entry.topSkills.map((sk, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 font-medium text-[11px]"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
