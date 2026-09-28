import React, { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { GlowingFloraAndFireflies } from './components/background/GlowingFloraAndFireflies';
import { Navbar } from './components/navbar/Navbar';
import { LandingPage } from './components/pages/LandingPage';
import { OnboardingPage } from './components/pages/OnboardingPage';
import { DashboardPage } from './components/pages/DashboardPage';
import { RoadmapPage } from './components/pages/RoadmapPage';
import { DiscoverPage } from './components/pages/DiscoverPage';
import { SavedPage } from './components/pages/SavedPage';
import { ProfilePage } from './components/pages/ProfilePage';
import { AboutPage } from './components/pages/AboutPage';
import { AuthGateway } from './components/pages/AuthGateway';
import { Sparkles, X } from 'lucide-react';

const VALID_PROTECTED_TABS = [
  'landing',
  'onboarding',
  'dashboard',
  'roadmap',
  'discover',
  'saved',
  'profile',
  'about'
];

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { currentUser, setAuthNotice } = useAuth();

  if (!currentUser) {
    return <AuthGateway onAuthSuccess={() => {}} />;
  }

  return <>{children}</>;
};

const AppContent: React.FC = () => {
  const { currentUser, welcomeMessage, clearWelcomeMessage, setAuthNotice } = useAuth();

  // Active page state
  const [currentTab, setCurrentTab] = useState<string>(() => {
    // If not logged in, always start at auth screen
    return 'dashboard';
  });

  const [selectedCareerRoadmapId, setSelectedCareerRoadmapId] = useState<string>('ai-ml-engineer');
  const [selectedDiscoverCategory, setSelectedDiscoverCategory] = useState<string>('all');

  // URL Hash router and auth guard
  useEffect(() => {
    const handleHashCheck = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (!hash) return;

      if (VALID_PROTECTED_TABS.includes(hash)) {
        if (!currentUser) {
          // Guard: unauthenticated URL attempt
          setAuthNotice('Please sign in to access NEXORA AI');
          window.location.hash = '';
        } else {
          setCurrentTab(hash);
        }
      }
    };

    handleHashCheck();
    window.addEventListener('hashchange', handleHashCheck);
    return () => window.removeEventListener('hashchange', handleHashCheck);
  }, [currentUser, setAuthNotice]);

  // Keep hash in sync when logged in
  useEffect(() => {
    if (currentUser) {
      window.location.hash = currentTab;
    } else {
      if (window.location.hash) {
        window.location.hash = '';
      }
    }
  }, [currentTab, currentUser]);

  // Handle successful login or signup from AuthGateway
  const handleAuthSuccess = (isNewUser: boolean) => {
    if (isNewUser || !currentUser?.profile) {
      setCurrentTab('onboarding');
    } else {
      setCurrentTab('dashboard');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigation handlers
  const handleExploreCareer = (careerId: string) => {
    setSelectedCareerRoadmapId(careerId);
    setCurrentTab('roadmap');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (category: string) => {
    setSelectedDiscoverCategory(category);
    setCurrentTab('discover');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGetStartedFromHome = () => {
    if (!currentUser?.profile) {
      setCurrentTab('onboarding');
    } else {
      setCurrentTab('dashboard');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Auto-dismiss welcome toast after 4.5 seconds
  useEffect(() => {
    if (welcomeMessage) {
      const timer = setTimeout(() => {
        clearWelcomeMessage();
      }, 4500);
      return () => clearTimeout(timer);
    }
  }, [welcomeMessage, clearWelcomeMessage]);

  return (
    <div className="relative min-h-screen text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Universal Theme Background: Blue Flowers Blooming & Swaying + Drifting Fireflies */}
      <GlowingFloraAndFireflies />

      {/* Friendly Animated Welcome Toast on Login */}
      {welcomeMessage && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-top-4 duration-300 pointer-events-auto">
          <div className="flex items-center gap-3 px-5 py-3 rounded-2xl glass-modal border border-cyan-400/40 shadow-2xl shadow-cyan-500/30 text-white backdrop-blur-2xl">
            <span className="text-xl">🌸</span>
            <div>
              <p className="text-xs font-semibold text-cyan-200">{welcomeMessage}</p>
              <p className="text-[10px] text-slate-300">Your AI career roadmap is ready to explore.</p>
            </div>
            <button
              onClick={clearWelcomeMessage}
              className="p-1 text-slate-400 hover:text-white rounded-lg transition-colors ml-2"
              aria-label="Close notification"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Navigation Header (Shown ONLY when logged in) */}
      {currentUser && (
        <Navbar
          currentTab={currentTab}
          setCurrentTab={(tab) => {
            setCurrentTab(tab);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onSelectCareerForRoadmap={handleExploreCareer}
        />
      )}

      {/* Main Page View Router with Protected Route Gate */}
      <main className="flex-1 w-full relative z-10">
        {!currentUser ? (
          /* Mandatory First Screen Login Gate */
          <AuthGateway onAuthSuccess={handleAuthSuccess} />
        ) : (
          /* Protected Pages (Accessed only after login) */
          <ProtectedRoute>
            {currentTab === 'landing' && (
              <LandingPage
                onGetStarted={handleGetStartedFromHome}
                onExploreCareer={handleExploreCareer}
                onSelectCategory={handleSelectCategory}
              />
            )}

            {currentTab === 'onboarding' && (
              <OnboardingPage
                onComplete={() => {
                  setCurrentTab('dashboard');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            )}

            {currentTab === 'dashboard' && (
              <DashboardPage
                onExploreCareer={handleExploreCareer}
                onEditProfile={() => {
                  setCurrentTab('profile');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            )}

            {currentTab === 'roadmap' && (
              <RoadmapPage
                initialCareerId={selectedCareerRoadmapId}
                onSelectCareer={(id) => setSelectedCareerRoadmapId(id)}
              />
            )}

            {currentTab === 'discover' && (
              <DiscoverPage
                initialCategory={selectedDiscoverCategory}
                onExploreCareer={handleExploreCareer}
              />
            )}

            {currentTab === 'saved' && (
              <SavedPage
                onExploreCareer={handleExploreCareer}
                onBrowseLibrary={() => {
                  setSelectedDiscoverCategory('all');
                  setCurrentTab('discover');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            )}

            {currentTab === 'profile' && (
              <ProfilePage
                onGoToDashboard={() => {
                  setCurrentTab('dashboard');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onExploreCareer={handleExploreCareer}
              />
            )}

            {currentTab === 'about' && <AboutPage />}
          </ProtectedRoute>
        )}
      </main>
    </div>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
