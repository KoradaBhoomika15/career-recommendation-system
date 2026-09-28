import React, { useState } from 'react';
import {
  Sparkles,
  Lock,
  Mail,
  User as UserIcon,
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Zap,
  Compass,
  GraduationCap,
  Briefcase
} from 'lucide-react';
import { useAuth, defaultDemoProfile } from '../../context/AuthContext';

interface AuthGatewayProps {
  onAuthSuccess: (isNewUser: boolean) => void;
}

export const AuthGateway: React.FC<AuthGatewayProps> = ({ onAuthSuccess }) => {
  const { login, signup, loginGuestDemo } = useAuth();
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const cleanEmail = email.trim();
    if (!cleanEmail || !cleanEmail.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!password || password.length < 5) {
      setError('Password must be at least 5 characters.');
      return;
    }

    if (mode === 'signup' && !name.trim()) {
      setError('Please enter your full name.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      if (mode === 'signup') {
        const res = signup(name, cleanEmail, password);
        setLoading(false);
        if (res.success) {
          onAuthSuccess(true); // new user goes to onboarding
        } else {
          setError(res.error || 'Failed to create account.');
        }
      } else {
        const res = login(cleanEmail, password);
        setLoading(false);
        if (res.success) {
          onAuthSuccess(false); // existing user goes to dashboard
        } else {
          setError(res.error || 'Sign in failed. Check your credentials.');
        }
      }
    }, 350);
  };

  const handleQuickDemo = () => {
    setLoading(true);
    setTimeout(() => {
      loginGuestDemo();
      setLoading(false);
      onAuthSuccess(false);
    }, 200);
  };

  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12 z-20">
      <div className="w-full max-w-lg">
        {/* Top Floating Badge */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-medium backdrop-blur-md shadow-lg shadow-cyan-950/50 animate-pulse">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>AI-Powered Career Intelligence</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-300">NEXORA AI</span>
          </h1>
          <p className="text-sm text-cyan-100/70 mt-1.5 max-w-md mx-auto">
            Please sign in or create an account to start exploring personalized career paths, step-by-step roadmaps, and curated learning resources.
          </p>
        </div>

        {/* Central Glassmorphism Auth Card */}
        <div className="glass-modal rounded-3xl p-6 sm:p-8 border border-cyan-400/30 shadow-2xl shadow-cyan-950/90 relative overflow-hidden backdrop-blur-2xl">
          {/* Subtle Top Glow Accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-sky-400 to-indigo-500" />

          {/* Switcher Tabs */}
          <div className="grid grid-cols-2 p-1.5 bg-slate-900/80 rounded-2xl border border-cyan-500/25 mb-6">
            <button
              type="button"
              onClick={() => {
                setMode('signin');
                setError(null);
              }}
              className={`py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 ${
                mode === 'signin'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('signup');
                setError(null);
              }}
              className={`py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 ${
                mode === 'signup'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Create Account
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-5 p-3 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
              <span>{error}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'signup' && (
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <UserIcon className="w-4 h-4 text-cyan-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Aarav Sharma"
                    className="w-full bg-slate-900/70 border border-slate-700/80 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-cyan-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full bg-slate-900/70 border border-slate-700/80 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-medium text-slate-300">
                  Password
                </label>
                {mode === 'signin' && (
                  <span className="text-[11px] text-cyan-400 hover:text-cyan-300 cursor-pointer">
                    Forgot password?
                  </span>
                )}
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-cyan-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-slate-900/70 border border-slate-700/80 rounded-xl pl-10 pr-11 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 focus:outline-none"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <span>{mode === 'signin' ? 'Sign In & Enter NEXORA' : 'Create My Account & Begin'}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-700/50" />
            </div>
            <span className="relative px-3 text-[11px] uppercase tracking-wider text-slate-400 bg-slate-900/90 rounded-full font-medium">
              or explore instantly
            </span>
          </div>

          {/* 1-Click Guest Demo Sign In */}
          <button
            type="button"
            onClick={handleQuickDemo}
            disabled={loading}
            className="w-full py-2.5 px-4 rounded-xl border border-cyan-400/35 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-200 hover:text-white text-xs sm:text-sm font-medium transition-all flex items-center justify-center gap-2 group shadow-sm hover:shadow-cyan-500/20 cursor-pointer"
          >
            <Zap className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
            <span>Continue as Guest Demo Explorer</span>
          </button>

          {/* Sample account hint */}
          <div className="mt-4 pt-4 border-t border-slate-800 text-center">
            <p className="text-[11px] text-slate-400">
              New here? You can create any account or use the instant guest demo button above.
            </p>
          </div>
        </div>

        {/* Feature Highlights Row */}
        <div className="grid grid-cols-3 gap-3 mt-6">
          <div className="glass-card rounded-2xl p-3 text-center border border-cyan-500/15">
            <Compass className="w-4 h-4 text-cyan-400 mx-auto mb-1.5" />
            <h2 className="text-xs font-semibold text-white">16+ Roadmaps</h2>
            <p className="text-[10px] text-cyan-200/60 mt-0.5">Stage-by-stage guide</p>
          </div>
          <div className="glass-card rounded-2xl p-3 text-center border border-cyan-500/15">
            <GraduationCap className="w-4 h-4 text-sky-400 mx-auto mb-1.5" />
            <h2 className="text-xs font-semibold text-white">100+ Free Courses</h2>
            <p className="text-[10px] text-cyan-200/60 mt-0.5">YouTube, CS50, NPTEL</p>
          </div>
          <div className="glass-card rounded-2xl p-3 text-center border border-cyan-500/15">
            <Briefcase className="w-4 h-4 text-indigo-400 mx-auto mb-1.5" />
            <h2 className="text-xs font-semibold text-white">INR Salaries</h2>
            <p className="text-[10px] text-cyan-200/60 mt-0.5">Real market insights</p>
          </div>
        </div>
      </div>
    </div>
  );
};
