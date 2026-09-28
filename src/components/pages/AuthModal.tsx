import React, { useState } from 'react';
import {
  Eye,
  EyeOff,
  Sparkles,
  Lock,
  Mail,
  User as UserIcon,
  X,
  ArrowRight,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'signin' | 'signup';
  onSuccess: (isNewUser: boolean) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialMode = 'signin',
  onSuccess
}) => {
  const { login, signup, loginGuestDemo } = useAuth();
  const [mode, setMode] = useState<'signin' | 'signup'>(initialMode);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!password || password.length < 6) {
      setError('Password should be at least 6 characters.');
      return;
    }

    if (mode === 'signup' && !name.trim()) {
      setError('Please enter your full name or nickname.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      if (mode === 'signup') {
        const res = signup(name, email, password);
        setLoading(false);
        if (res.success) {
          onSuccess(true); // new user triggers onboarding
          onClose();
        } else {
          setError(res.error || 'Failed to create account.');
        }
      } else {
        const res = login(email, password);
        setLoading(false);
        if (res.success) {
          onSuccess(false);
          onClose();
        } else {
          setError(res.error || 'Sign in failed. Check your credentials.');
        }
      }
    }, 400);
  };

  const handleDemoSignIn = () => {
    loginGuestDemo();
    onSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-2xl glass-modal p-6 sm:p-8 border border-cyan-400/30 shadow-2xl shadow-cyan-950/80">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Icon with Floral Petal Glow */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 via-sky-500 to-indigo-600 p-0.5 shadow-lg shadow-cyan-500/30 mb-3 flex items-center justify-center">
            <div className="w-full h-full rounded-2xl bg-slate-950/80 flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-cyan-400 animate-pulse" />
            </div>
            {/* Tiny glowing dot */}
            <div className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-cyan-400 shadow-md shadow-cyan-300 animate-ping" />
          </div>

          <h2 className="font-heading text-2xl font-bold text-white tracking-tight">
            {mode === 'signin' ? 'Welcome Back to NEXORA' : 'Begin Your AI Career Journey'}
          </h2>
          <p className="text-xs sm:text-sm text-cyan-200/70 mt-1 max-w-xs">
            {mode === 'signin'
              ? 'Sign in to access your personalized roadmap & recommendations'
              : 'Create your account to unlock AI-powered career matches & roadmaps'}
          </p>

          {/* Mode Switcher Tabs */}
          <div className="grid grid-cols-2 p-1 bg-slate-900/80 rounded-xl border border-cyan-500/20 w-full mt-5">
            <button
              type="button"
              onClick={() => {
                setMode('signin');
                setError(null);
              }}
              className={`py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                mode === 'signin'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow'
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
              className={`py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                mode === 'signup'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Error Notification */}
        {error && (
          <div className="mb-4 p-3 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {mode === 'signup' && (
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Your Full Name
              </label>
              <div className="relative">
                <UserIcon className="w-4 h-4 text-cyan-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Priya Sharma"
                  className="w-full pl-10 pr-3.5 py-2.5 bg-slate-900/60 rounded-xl border border-cyan-500/25 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  required
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@domain.com"
                className="w-full pl-10 pr-3.5 py-2.5 bg-slate-900/60 rounded-xl border border-cyan-500/25 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                required
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-medium text-slate-300">
                Password
              </label>
              <span className="text-[11px] text-cyan-300/60">Min 6 characters</span>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-cyan-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-10 py-2.5 bg-slate-900/60 rounded-xl border border-cyan-500/25 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 p-1"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 mt-2 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-sm shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
          >
            {loading ? (
              <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <span>{mode === 'signin' ? 'Sign In to Account' : 'Create My Free Account'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-4 flex items-center justify-center">
          <div className="border-t border-cyan-500/20 w-full" />
          <span className="absolute bg-[#081533] px-2.5 text-[11px] text-slate-400 font-medium">
            or explore instantly
          </span>
        </div>

        {/* Instant Demo Account Button */}
        <button
          type="button"
          onClick={handleDemoSignIn}
          className="w-full py-2.5 rounded-xl border border-cyan-400/40 bg-cyan-950/30 hover:bg-cyan-900/40 text-cyan-200 text-xs sm:text-sm font-medium transition-all flex items-center justify-center gap-2"
        >
          <Sparkles className="w-4 h-4 text-cyan-300" />
          <span>One-Click Explorer Demo (Instant Access)</span>
        </button>

        {/* Reassurance text */}
        <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-slate-400">
          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
          <span>Runs entirely in browser • No API keys needed</span>
        </div>
      </div>
    </div>
  );
};
