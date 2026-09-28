import React, { useState, useRef, useEffect } from 'react';
import {
  Bookmark,
  Sparkles,
  User as UserIcon,
  LogOut,
  Menu,
  X,
  Compass,
  MapPin,
  ChevronDown
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  onSelectCareerForRoadmap?: (careerId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab
}) => {
  const { currentUser, logout, savedItems } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setUserDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!currentUser) {
    return null; // When logged out, the clean auth screen is shown alone
  }

  const navItems = [
    { id: 'landing', label: 'Home' },
    { id: 'dashboard', label: 'Recommendations' },
    { id: 'roadmap', label: 'Career Roadmaps' },
    { id: 'discover', label: 'Discover' },
    { id: 'saved', label: 'Saved', badge: savedItems.length },
    { id: 'about', label: 'How AI Works' }
  ];

  const handleNavClick = (tabId: string) => {
    setCurrentTab(tabId);
    setMobileMenuOpen(false);
    setUserDropdownOpen(false);
  };

  const handleLogout = () => {
    setUserDropdownOpen(false);
    setMobileMenuOpen(false);
    logout();
  };

  return (
    <header className="sticky top-0 z-40 w-full glass-nav backdrop-blur-xl border-b border-cyan-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('landing')}
          className="flex items-center gap-2.5 text-left group focus:outline-none cursor-pointer"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 via-sky-500 to-indigo-500 shadow-md shadow-cyan-500/25 group-hover:shadow-cyan-400/40 transition-all duration-300">
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
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
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

        {/* Desktop User Avatar & Dropdown */}
        <div className="hidden md:flex items-center gap-3" ref={dropdownRef}>
          <div className="relative">
            <button
              onClick={() => setUserDropdownOpen(!userDropdownOpen)}
              className="flex items-center gap-2.5 p-1.5 pr-3 rounded-full glass-card hover:border-cyan-400/50 transition-all focus:outline-none cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-semibold text-xs shadow-inner border border-white/20">
                {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'U'}
              </div>
              <div className="text-left text-xs max-w-[120px] truncate">
                <p className="font-medium text-slate-100 truncate">{currentUser.name}</p>
              </div>
              <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${userDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {userDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 glass-modal rounded-2xl shadow-2xl p-2 border border-cyan-500/30 z-50 animate-in fade-in zoom-in-95 duration-150 backdrop-blur-2xl">
                <div className="px-3 py-2 border-b border-cyan-500/15 mb-1.5">
                  <p className="text-[11px] text-slate-400">Signed in as</p>
                  <p className="text-sm font-semibold text-white truncate">{currentUser.name}</p>
                  <p className="text-xs text-cyan-300/80 truncate">{currentUser.email}</p>
                </div>

                <div className="space-y-1">
                  <button
                    onClick={() => handleNavClick('profile')}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-xs text-slate-200 hover:text-cyan-300 hover:bg-cyan-500/15 rounded-xl transition-colors text-left cursor-pointer"
                  >
                    <UserIcon className="w-4 h-4 text-cyan-400" />
                    <span>My Profile</span>
                  </button>

                  <button
                    onClick={() => handleNavClick('saved')}
                    className="w-full flex items-center justify-between px-3 py-2 text-xs text-slate-200 hover:text-cyan-300 hover:bg-cyan-500/15 rounded-xl transition-colors text-left cursor-pointer"
                  >
                    <span className="flex items-center gap-2.5">
                      <Bookmark className="w-4 h-4 text-cyan-400" />
                      <span>Saved</span>
                    </span>
                    {savedItems.length > 0 && (
                      <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-cyan-500/30 text-cyan-300">
                        {savedItems.length}
                      </span>
                    )}
                  </button>

                  <button
                    onClick={() => handleNavClick('dashboard')}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-xs text-slate-200 hover:text-cyan-300 hover:bg-cyan-500/15 rounded-xl transition-colors text-left cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 text-sky-400" />
                    <span>Recommendations</span>
                  </button>
                </div>

                <div className="h-px bg-cyan-500/15 my-1.5" />

                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2.5 px-3 py-2 text-xs text-rose-300 hover:bg-rose-500/15 rounded-xl transition-colors text-left cursor-pointer"
                >
                  <LogOut className="w-4 h-4 text-rose-400" />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none cursor-pointer"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-modal border-t border-cyan-500/20 px-4 pt-3 pb-6 space-y-2 backdrop-blur-2xl">
          <div className="px-3 py-2.5 mb-2 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-semibold text-xs">
                {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'U'}
              </div>
              <div className="text-left text-xs">
                <p className="font-semibold text-white">{currentUser.name}</p>
                <p className="text-[11px] text-cyan-300/70 truncate">{currentUser.email}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="text-xs text-rose-300 hover:underline flex items-center gap-1 p-1 cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-1.5 pt-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full px-3 py-2 rounded-xl text-xs font-medium text-left flex items-center justify-between cursor-pointer ${
                  currentTab === item.id
                    ? 'text-cyan-300 bg-cyan-500/20 border border-cyan-400/30'
                    : 'text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <span>{item.label}</span>
                {item.badge !== undefined && item.badge > 0 && (
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-cyan-500/30 text-cyan-200">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-cyan-500/15 flex gap-2">
            <button
              onClick={() => handleNavClick('profile')}
              className="flex-1 py-2 px-3 text-xs rounded-xl bg-cyan-500/15 border border-cyan-400/25 text-cyan-200 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <UserIcon className="w-3.5 h-3.5" />
              <span>My Profile</span>
            </button>
            <button
              onClick={() => handleNavClick('saved')}
              className="flex-1 py-2 px-3 text-xs rounded-xl bg-cyan-500/15 border border-cyan-400/25 text-cyan-200 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>Saved ({savedItems.length})</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
