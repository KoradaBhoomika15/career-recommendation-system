import React, { useState } from 'react';
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
import { AuthModal } from './components/pages/AuthModal';
import { AuthGateway } from './components/pages/AuthGateway';

const AppContent: React.FC = () => {
  const { currentUser } = useAuth();

  const [currentTab, setCurrentTab] = useState<string>('dashboard');
  const [selectedCareerRoadmapId, setSelectedCareerRoadmapId] = useState<string>('ai-ml-engineer');
  const [selectedDiscoverCategory, setSelectedDiscoverCategory] = useState<string>('all');
  const [authModalOpen, setAuthModalOpen] = useState<boolean>(false);
  const [authModalMode, setAuthModalMode] = useState<'signin' | 'signup'>('signin');

  const handleOpenAuth = (mode: 'signin' | 'signup') => {
    setAuthModalMode(mode);
    setAuthModalOpen(true);
  };

  const handleAuthSuccess = (isNewUser: boolean) => {
    if (isNewUser) {
      setCurrentTab('onboarding');
    } else {
      setCurrentTab('dashboard');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  const handleGetStarted = () => {
    if (currentUser?.profile) {
      setCurrentTab('dashboard');
    } else if (currentUser) {
      setCurrentTab('onboarding');
    } else {
      handleOpenAuth('signup');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Universal Theme Background: Blue Flowers Swaying + Drifting Fireflies */}
      <GlowingFloraAndFireflies />

      {/* Navigation Header */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenAuth={handleOpenAuth}
        onSelectCareerForRoadmap={handleExploreCareer}
      />

      {/* Main Page View Router */}
      <main className="flex-1 w-full relative z-10">
        {!currentUser ? (
          <AuthGateway onAuthSuccess={handleAuthSuccess} />
        ) : (
          <>
            {currentTab === 'landing' && (
              <LandingPage
                onGetStarted={handleGetStarted}
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
          </>
        )}
      </main>

      {/* Auth Modal (for switching or re-authenticating) */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authModalMode}
        onSuccess={handleAuthSuccess}
      />
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
