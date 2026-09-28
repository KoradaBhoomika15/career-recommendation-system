import React, { useState } from 'react';
import {
  Sparkles,
  Lock,
  Mail,
  User as UserIcon,
  Eye,
  EyeOff,
  ArrowRight,
  AlertCircle,
  Zap,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface AuthGatewayProps {
  onAuthSuccess: (isNewUser: boolean) => void;
}

export const AuthGateway: React.FC<AuthGatewayProps> = ({ onAuthSuccess }) => {
  const { login, signup, loginGuestDemo, authNotice } = useAuth();
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const cleanEmail = email.trim();
    if (!cleanEmail) {
      setError('Please enter your email address.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      setError('Please enter a valid email address (e.g., name@domain.com).');
      return;
    }

    if (!password || password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    if (mode === 'signup') {
      if (!name.trim() || name.trim().length < 2) {
        setError('Please enter your full name.');
        return;
      }

      if (password !== confirmPassword) {
        setError('Passwords do not match. Please re-enter.');
        return;
      }
    }

    setLoading(true);

    setTimeout(() => {
      if (mode === 'signup') {
        const res = signup(name, cleanEmail, password, confirmPassword);
        setLoading(false);
        if (res.success) {
          onAuthSuccess(true);
        } else {
          setError(res.error || 'Failed to create account.');
        }
      } else {
        const res = login(cleanEmail, password);
        setLoading(false);
        if (res.success) {
          onAuthSuccess(Boolean(res.isNewUser));
        } else {
          setError(res.error || 'Sign in failed. Check your credentials.');
        }
      }
    }, 400);
  };

  const handleQuickDemo = () => {
    setLoading(true);
    setTimeout(() => {
      loginGuestDemo();
      setLoading(false);
      onAuthSuccess(false);
    }, 300);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-8 relative z-20">
      {/* Brand Header */}
      <div className="text-center mb-5 max-w-md mx-auto">
        {/* Animated Brand Emblem */}
        <div className="inline-flex items-center justify-center mb-3">
          <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-600 via-sky-500 to-indigo-600 shadow-xl shadow-cyan-500/30 border border-white/20">
            <svg
              className="w-8 h-8 text-white drop-shadow-md"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M12 2a4 4 0 0 0-4 4c0 3 4 8 4 8s4-5 4-8a4 4 0 0 0-4-4Z"
                fill="currentColor"
                fillOpacity="0.4"
              />
              <circle cx="12" cy="14" r="2" fill="currentColor" />
              <path d="M12 16v6" />
              <path d="M8 18c2 1 6 1 8 0" />
            </svg>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-cyan-400 rounded-full border-2 border-slate-950 animate-ping" />
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mb-1">
          <span className="font-heading font-extrabold text-3xl sm:text-4xl tracking-tight text-white">
            NEXORA
          </span>
          <span className="text-xs uppercase font-extrabold tracking-widest px-2 py-0.5 rounded-md bg-cyan-500/25 text-cyan-300 border border-cyan-400/40 shadow-sm shadow-cyan-500/30">
            AI
          </span>
        </div>

        {/* Tagline */}
        <p className="font-heading text-base sm:text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-sky-300 to-blue-200">
          Discover Your Career Path. Powered by AI.
        </p>

        {/* Small Notice Line */}
        <div className="mt-2.5 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 backdrop-blur-md">
          <Lock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span className="text-xs text-cyan-200/90 font-medium">
            {authNotice || 'Please sign in to continue'}
          </span>
        </div>
      </div>

      {/* Glassmorphic Auth Card */}
      <div className="w-full max-w-md glass-modal rounded-3xl p-6 sm:p-7 border border-cyan-400/30 shadow-2xl shadow-cyan-950/90 relative overflow-hidden backdrop-blur-2xl">
        {/* Subtle top neon gradient line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500" />

        {/* Tabs: Sign In / Sign Up */}
        <div className="grid grid-cols-2 p-1 bg-slate-900/80 rounded-2xl border border-cyan-500/25 mb-5">
          <button
            type="button"
            onClick={() => {
              setMode('signin');
              setError(null);
            }}
            className={`py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 ${
              mode === 'signin'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/30'
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
            className={`py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 ${
              mode === 'signup'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Error Alert Box */}
        {error && (
          <div className="mb-4 p-3 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2.5 animate-in fade-in duration-200">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {mode === 'signup' && (
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Full Name
              </label>
              <div className="relative">
                <UserIcon className="w-4 h-4 text-cyan-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Priya Sharma"
                  className="w-full bg-slate-900/70 border border-slate-700/80 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-cyan-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full bg-slate-900/70 border border-slate-700/80 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-cyan-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={mode === 'signup' ? 'At least 6 characters' : '••••••••'}
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

          {mode === 'signup' && (
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <ShieldCheck className="w-4 h-4 text-cyan-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Repeat your password"
                  className="w-full bg-slate-900/70 border border-slate-700/80 rounded-xl pl-10 pr-11 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 focus:outline-none"
                  aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
          )}

          {/* Submit Button with Loading Spinner */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <span>{mode === 'signin' ? 'Sign In to NEXORA AI' : 'Create Account & Begin'}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-4 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-700/50" />
          </div>
          <span className="relative px-3 text-[10px] uppercase tracking-wider text-slate-400 bg-slate-900/90 rounded-full font-medium">
            or try instant demo
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
          <span>⚡ 1-Click Explorer Demo (Aarav Sharma)</span>
        </button>

        {/* Helper footnote */}
        <div className="mt-3.5 pt-3 border-t border-slate-800 text-center">
          <p className="text-[11px] text-slate-400">
            {mode === 'signin' ? (
              <>
                Don&apos;t have an account yet?{' '}
                <button
                  type="button"
                  onClick={() => {
                    setMode('signup');
                    setError(null);
                  }}
                  className="text-cyan-300 hover:underline font-semibold"
                >
                  Sign Up Free
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => {
                    setMode('signin');
                    setError(null);
                  }}
                  className="text-cyan-300 hover:underline font-semibold"
                >
                  Sign In
                </button>
              </>
            )}
          </p>
        </div>
      </div>

      {/* Micro Trust Indicators */}
      <div className="flex items-center justify-center gap-4 mt-5 text-[11px] text-cyan-200/60">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
          16+ Career Roadmaps
        </span>
        <span>•</span>
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
          Free Learning Resources
        </span>
        <span>•</span>
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
          No Credit Card Required
        </span>
      </div>
    </div>
  );
};
