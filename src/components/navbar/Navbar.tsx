import React, { useState } from 'react';
import {
  Compass,
  Bookmark,
  Sparkles,
  User as UserIcon,
  LogOut,
  Menu,
  X,
  MapPin,
  Info,
  Layers,
  ChevronDown
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  onOpenAuth: (mode: 'signin' | 'signup') => void;
  onSelectCareerForRoadmap?: (careerId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  onOpenAuth
}) => {
  const { currentUser, logout, savedItems } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const navItems = [
    { id: 'landing', label: 'Home' },
    { id: 'dashboard', label: 'Recommendations', requiresAuth: true },
    { id: 'discover', label: 'Discover' },
    { id: 'roadmap', label: 'Career Roadmaps' },
    { id: 'saved', label: 'Saved', badge: savedItems.length },
    { id: 'about', label: 'How AI Works' }
  ];

  const handleNavClick = (tabId: string, requiresAuth?: boolean) => {
    if (!currentUser) {
      onOpenAuth('signin');
      setMobileMenuOpen(false);
      return;
    }
    setCurrentTab(tabId);
    setMobileMenuOpen(false);
    setUserDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full glass-nav backdrop-blur-xl border-b border-cyan-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => {
            if (currentUser) {
              setCurrentTab('landing');
            } else {
              onOpenAuth('signin');
            }
          }}
          className="flex items-center gap-2.5 text-left group focus:outline-none"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 via-sky-500 to-indigo-500 shadow-md shadow-cyan-500/25 group-hover:shadow-cyan-400/40 transition-all duration-300">
            {/* Delicate floral petal motif in logo */}
            <svg
              className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2a4 4 0 0 0-4 4c0 3 4 8 4 8s4-5 4-8a4 4 0 0 0-4-4Z" fill="currentColor" fillOpacity="0.4" />
              <circle cx="12" cy="14" r="2" fill="currentColor" />
              <path d="M12 16v6" />
              <path d="M8 18c2 1 6 1 8 0" />
            </svg>
            <div className="absolute inset-0 rounded-xl border border-white/25 pointer-events-none" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-heading font-bold text-xl tracking-tight text-white group-hover:text-cyan-200 transition-colors">
                NEXORA
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                AI
              </span>
            </div>
            <span className="text-[10px] text-cyan-200/60 -mt-1 hidden sm:inline">
              Career Engine
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id, item.requiresAuth)}
                className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? 'text-cyan-300 bg-cyan-500/15 border border-cyan-400/25 shadow-sm shadow-cyan-950'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                <span>{item.label}</span>
                {item.badge !== undefined && item.badge > 0 && (
                  <span className="text-[11px] font-bold px-1.5 py-0.2 rounded-full bg-cyan-500/30 text-cyan-200 border border-cyan-400/40">
                    {item.badge}
                  </span>
                )}
                {isActive && (
                  <div className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop User / Auth Actions */}
        <div className="hidden md:flex items-center gap-3">
          {currentUser ? (
            <div className="relative">
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="flex items-center gap-2.5 p-1.5 pr-3 rounded-full glass-card hover:border-cyan-400/50 transition-all focus:outline-none"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-semibold text-xs shadow-inner">
                  {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'U'}
                </div>
                <div className="text-left text-xs max-w-[120px] truncate">
                  <p className="font-medium text-slate-100 truncate">{currentUser.name}</p>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {userDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 glass-modal rounded-xl shadow-2xl p-1.5 border border-cyan-500/30 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-2 border-b border-cyan-500/15 mb-1">
                    <p className="text-xs text-slate-400">Signed in as</p>
                    <p className="text-sm font-medium text-white truncate">{currentUser.email}</p>
                  </div>
                  <button
                    onClick={() => {
                      setCurrentTab('dashboard');
                      setUserDropdownOpen(false);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2 text-xs text-slate-200 hover:text-cyan-300 hover:bg-cyan-500/10 rounded-lg transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    My Recommendations
                  </button>
                  <button
                    onClick={() => {
                      setCurrentTab('profile');
                      setUserDropdownOpen(false);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2 text-xs text-slate-200 hover:text-cyan-300 hover:bg-cyan-500/10 rounded-lg transition-colors"
                  >
                    <UserIcon className="w-3.5 h-3.5 text-cyan-400" />
                    Profile & Skill Weights
                  </button>
                  <button
                    onClick={() => {
                      setCurrentTab('onboarding');
                      setUserDropdownOpen(false);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2 text-xs text-slate-200 hover:text-cyan-300 hover:bg-cyan-500/10 rounded-lg transition-colors"
                  >
                    <Layers className="w-3.5 h-3.5 text-cyan-400" />
                    Retake Onboarding Quiz
                  </button>
                  <button
                    onClick={() => {
                      setCurrentTab('saved');
                      setUserDropdownOpen(false);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2 text-xs text-slate-200 hover:text-cyan-300 hover:bg-cyan-500/10 rounded-lg transition-colors"
                  >
                    <Bookmark className="w-3.5 h-3.5 text-cyan-400" />
                    Saved Items ({savedItems.length})
                  </button>
                  <div className="h-px bg-cyan-500/15 my-1" />
                  <button
                    onClick={() => {
                      logout();
                      setUserDropdownOpen(false);
                      setCurrentTab('landing');
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2 text-xs text-rose-300 hover:bg-rose-500/10 rounded-lg transition-colors"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => onOpenAuth('signin')}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-200 hover:text-cyan-300 transition-colors"
              >
                Sign In
              </button>
              <button
                onClick={() => onOpenAuth('signup')}
                className="px-4 py-1.5 text-sm font-medium text-white rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20 hover:shadow-cyan-400/35 transition-all duration-200 border border-cyan-400/30"
              >
                Sign Up Free
              </button>
            </div>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-modal border-t border-cyan-500/20 px-4 pt-3 pb-6 space-y-2">
          {currentUser && (
            <div className="px-3 py-2 mb-2 rounded-xl bg-cyan-950/40 border border-cyan-500/20 flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400">Signed in</p>
                <p className="text-sm font-semibold text-white">{currentUser.name}</p>
              </div>
              <button
                onClick={() => {
                  logout();
                  setMobileMenuOpen(false);
                  setCurrentTab('landing');
                }}
                className="text-xs text-rose-300 hover:underline flex items-center gap-1"
              >
                <LogOut className="w-3.5 h-3.5" />
                Sign Out
              </button>
            </div>
          )}

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id, item.requiresAuth)}
              className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                currentTab === item.id
                  ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-400/30'
                  : 'text-slate-300 hover:bg-slate-800/50'
              }`}
            >
              <span>{item.label}</span>
              {item.badge !== undefined && item.badge > 0 && (
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-cyan-500/30 text-cyan-200">
                  {item.badge}
                </span>
              )}
            </button>
          ))}

          {currentUser ? (
            <button
              onClick={() => handleNavClick('profile')}
              className="w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-800/50 flex items-center gap-2"
            >
              <UserIcon className="w-4 h-4 text-cyan-400" />
              My Profile & Skill Settings
            </button>
          ) : (
            <div className="pt-3 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth('signin');
                }}
                className="w-full py-2.5 text-center text-sm font-medium rounded-xl glass-card text-white hover:border-cyan-400/40"
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth('signup');
                }}
                className="w-full py-2.5 text-center text-sm font-medium rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
              >
                Sign Up Free
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
