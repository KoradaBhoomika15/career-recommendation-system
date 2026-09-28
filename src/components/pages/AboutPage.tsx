import React from 'react';
import {
  Sparkles,
  Cpu,
  Layers,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Brain,
  Code2
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const formulaBreakdown = [
    {
      factor: 'Interest Similarity Vector',
      weight: '30%',
      formula: 'Jaccard & Cosine Overlap: |U_interests ∩ C_tags| / |U_interests ∪ C_tags|',
      description:
        'Quantifies intrinsic motivation by measuring semantic overlap between your stated passion domains and each career’s taxonomy tags.'
    },
    {
      factor: 'Weighted Skill Fulfillment',
      weight: '25%',
      formula: '∑ (min(1.15, UserSkill_i / ReqMin_i) × Weight_i) / ∑ Weight_i',
      description:
        'Normalizes your self-reported proficiency scores (0-10) against the career’s mandatory prerequisites, weighting core competencies higher than ancillary tools.'
    },
    {
      factor: 'Goal Alignment & Horizon',
      weight: '20%',
      formula: 'Categorical Decision Matrix on [Get a job, Switch career, Learn, Explore]',
      description:
        'Ensures recommended career pathways support your actual timeline and urgency, favoring high-transition-rate roles for career switchers.'
    },
    {
      factor: 'Experience & Difficulty Calibration',
      weight: '10%',
      formula: 'Absolute Delta Penalty: 10 - (|Lvl_user - Lvl_career| × 2.5)',
      description:
        'Matches your current seniority to the realistic barrier to entry, recommending foundational stages for beginners and advanced specialization for veterans.'
    },
    {
      factor: 'Work Style & Cultural Fit',
      weight: '10%',
      formula: 'Set Membership: (UserWorkStyle ∈ CareerWorkStyleFit) ? 10 : 6',
      description:
        'Considers geographic flexibility (Remote, Hybrid, In-Office) and study pace commitments (Intensive, Balanced, Relaxed).'
    },
    {
      factor: 'Market Momentum & Demand',
      weight: '5%',
      formula: 'Empirical Hiring Velocity & Indian Industry Compensation Index',
      description:
        'Reflects verified Indian tech and non-tech employment demand, ensuring recommendations lead to viable economic security.'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Hero */}
      <div className="rounded-3xl glass-card p-6 sm:p-10 border border-cyan-400/25 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Brain className="w-4 h-4" />
            <span>Algorithmic Transparency & Fairness</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            How NEXORA Computes Your Career Match
          </h1>
          <p className="text-sm sm:text-base text-cyan-100/75 font-light leading-relaxed">
            Unlike superficial quizzes with predetermined results, NEXORA executes a true
            content-based filtering recommendation engine right in your browser. No black boxes,
            no advertising sponsorships, and zero telemetry.
          </p>
        </div>
      </div>

      {/* Math Formula Card */}
      <section className="rounded-3xl glass-card p-6 sm:p-8 border border-cyan-500/20 space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <h2 className="font-heading text-2xl font-bold text-white flex items-center gap-2">
              <Code2 className="w-5 h-5 text-cyan-400" />
              <span>The NEXORA Objective Scoring Function</span>
            </h2>
            <p className="text-xs text-slate-300 mt-0.5">
              Every career card’s circular Match % is computed dynamically using this weighted formula:
            </p>
          </div>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
            Sum of Weights = 100%
          </span>
        </div>

        {/* Formula Display Box */}
        <div className="p-4 rounded-2xl bg-slate-950/80 border border-cyan-400/30 font-mono text-xs sm:text-sm text-cyan-300 overflow-x-auto shadow-inner">
          <p className="text-slate-400 text-[11px] mb-1">// Mathematical Scoring Metric</p>
          <code>
            Match% = (InterestMatch × 0.30) + (SkillMatch × 0.25) + (GoalAlignment × 0.20) +
            (DifficultyMatch × 0.10) + (PreferenceFit × 0.10) + (MarketMomentum × 0.05)
          </code>
        </div>

        {/* Breakdown Table / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {formulaBreakdown.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl glass-card p-5 border border-cyan-500/15 space-y-2 hover:border-cyan-400/30 transition-all"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-sm font-bold text-white">
                  {item.factor}
                </h3>
                <span className="text-xs font-extrabold text-cyan-300 px-2 py-0.5 rounded-full bg-cyan-500/20">
                  {item.weight}
                </span>
              </div>
              <p className="font-mono text-[11px] text-cyan-200/70 bg-slate-950/40 p-2 rounded-lg border border-cyan-500/10">
                {item.formula}
              </p>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Dynamic Reason Generation */}
      <section className="rounded-3xl glass-card p-6 sm:p-8 border border-cyan-500/20 space-y-4">
        <h2 className="font-heading text-2xl font-bold text-white flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-cyan-400" />
          <span>Dynamic Explainable AI (XAI)</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
          When NEXORA presents the green checkmark bullet points under{' '}
          <strong className="text-cyan-300">"Why NEXORA recommended this"</strong>, they are not
          pre-written generic strings. Our engine inspects your specific input vector to generate
          truthful justifications—such as identifying exact skill overlaps, acknowledging
          your current experience level, and highlighting work flexibility fit.
        </p>
      </section>

      {/* Privacy & Zero-Dependency Promise */}
      <section className="rounded-3xl glass-card p-6 sm:p-8 border border-cyan-500/20 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="space-y-2">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-heading text-base font-bold text-white">100% Client-Side Privacy</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Your profiles, ratings, and saved items remain in your browser’s localStorage. No
            surveillance or third-party cookies.
          </p>
        </div>

        <div className="space-y-2">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
            <Cpu className="w-5 h-5" />
          </div>
          <h3 className="font-heading text-base font-bold text-white">Zero Cloud Latency</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Matches update instantaneously as you drag sliders or toggle interests. Zero API keys,
            zero server downtimes.
          </p>
        </div>

        <div className="space-y-2">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
            <TrendingUp className="w-5 h-5" />
          </div>
          <h3 className="font-heading text-base font-bold text-white">100% Free Resources</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Every course, repository, and lecture in our roadmaps is free to audit, curated from
            Harvard, MIT, freeCodeCamp, and NPTEL.
          </p>
        </div>
      </section>
    </div>
  );
};
