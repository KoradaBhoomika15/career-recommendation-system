import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  User,
  UserProfile,
  SavedItem,
  SavedCategory,
  RecommendationHistoryEntry
} from '../types';

interface AuthContextType {
  currentUser: User | null;
  users: User[];
  savedItems: SavedItem[];
  completedStages: Record<string, number[]>;
  history: RecommendationHistoryEntry[];
  login: (email: string, password?: string) => { success: boolean; error?: string };
  signup: (name: string, email: string, password?: string) => { success: boolean; error?: string };
  loginGuestDemo: () => void;
  logout: () => void;
  updateProfile: (profile: UserProfile) => void;
  toggleSaveItem: (type: SavedCategory, item: any) => void;
  isItemSaved: (itemId: string) => boolean;
  toggleStageCompletion: (careerId: string, stageNumber: number) => void;
  getStageProgress: (careerId: string) => { completedCount: number; totalCount: number; percentage: number };
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const USERS_STORAGE_KEY = 'nexora_registered_users';
const CURRENT_USER_KEY = 'nexora_active_user';
const SAVED_ITEMS_KEY = 'nexora_saved_items_v2';
const STAGES_STORAGE_KEY = 'nexora_completed_stages';
const HISTORY_STORAGE_KEY = 'nexora_rec_history';

export const defaultDemoProfile: UserProfile = {
  interests: ['Technology', 'AI', 'Data', 'Engineering'],
  skills: {
    Python: 7,
    SQL: 6,
    Communication: 7,
    'Problem Solving': 8,
    Creativity: 6,
    Math: 7,
    Design: 5,
    Leadership: 5
  },
  goal: 'Get a job',
  experienceLevel: 'Intermediate',
  workStyle: 'Remote',
  pace: 'Balanced (10-15 hrs/wk)',
  salaryPriority: 'High Growth'
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<User[]>(() => {
    try {
      const saved = localStorage.getItem(USERS_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    try {
      const active = localStorage.getItem(CURRENT_USER_KEY);
      if (active) return JSON.parse(active);

      // Pre-seed demo user so user has an immediate delightful landing/dashboard experience
      const demoUser: User = {
        id: 'user-demo-1',
        name: 'Aarav Sharma',
        email: 'aarav.sharma@nexora.ai',
        profile: defaultDemoProfile,
        createdAt: new Date().toISOString()
      };
      return demoUser;
    } catch {
      return null;
    }
  });

  const [savedItems, setSavedItems] = useState<SavedItem[]>(() => {
    try {
      const saved = localStorage.getItem(SAVED_ITEMS_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [completedStages, setCompletedStages] = useState<Record<string, number[]>>(() => {
    try {
      const saved = localStorage.getItem(STAGES_STORAGE_KEY);
      return saved ? JSON.parse(saved) : { 'ai-ml-engineer': [1] };
    } catch {
      return { 'ai-ml-engineer': [1] };
    }
  });

  const [history, setHistory] = useState<RecommendationHistoryEntry[]>(() => {
    try {
      const saved = localStorage.getItem(HISTORY_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Sync state to localStorage
  useEffect(() => {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(currentUser));
    } else {
      localStorage.removeItem(CURRENT_USER_KEY);
    }
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem(SAVED_ITEMS_KEY, JSON.stringify(savedItems));
  }, [savedItems]);

  useEffect(() => {
    localStorage.setItem(STAGES_STORAGE_KEY, JSON.stringify(completedStages));
  }, [completedStages]);

  useEffect(() => {
    localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(history));
  }, [history]);

  const login = (email: string, password?: string) => {
    const cleanEmail = email.toLowerCase().trim();
    const existing = users.find((u) => u.email.toLowerCase() === cleanEmail);

    if (!existing) {
      // If user logs in with email that isn't saved yet, let's create it gracefully
      const newUser: User = {
        id: `user-${Date.now()}`,
        name: cleanEmail.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
        email: cleanEmail,
        password: password || 'demo123',
        profile: defaultDemoProfile,
        createdAt: new Date().toISOString()
      };
      setUsers((prev) => [...prev, newUser]);
      setCurrentUser(newUser);
      return { success: true };
    }

    if (password && existing.password && existing.password !== password) {
      return { success: false, error: 'Incorrect password. Please try again.' };
    }

    setCurrentUser(existing);
    return { success: true };
  };

  const signup = (name: string, email: string, password?: string) => {
    const cleanEmail = email.toLowerCase().trim();
    if (users.some((u) => u.email.toLowerCase() === cleanEmail)) {
      return { success: false, error: 'An account with this email already exists. Please Sign In.' };
    }

    const newUser: User = {
      id: `user-${Date.now()}`,
      name: name.trim() || 'Learner',
      email: cleanEmail,
      password: password || 'demo123',
      profile: undefined, // Needs onboarding
      createdAt: new Date().toISOString()
    };

    setUsers((prev) => [...prev, newUser]);
    setCurrentUser(newUser);
    return { success: true };
  };

  const loginGuestDemo = () => {
    const guestUser: User = {
      id: 'guest-explorer',
      name: 'Riya Verma',
      email: 'riya.verma@example.com',
      profile: {
        interests: ['Technology', 'AI', 'Design', 'Data'],
        skills: {
          Python: 8,
          SQL: 7,
          Design: 6,
          'Problem Solving': 8,
          Communication: 7,
          Creativity: 7,
          Math: 6,
          Leadership: 5
        },
        goal: 'Switch career',
        experienceLevel: 'Intermediate',
        workStyle: 'Remote',
        pace: 'Balanced (10-15 hrs/wk)',
        salaryPriority: 'High Growth'
      },
      createdAt: new Date().toISOString()
    };
    setCurrentUser(guestUser);
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const updateProfile = (profile: UserProfile) => {
    if (!currentUser) return;
    const updated: User = {
      ...currentUser,
      profile
    };
    setCurrentUser(updated);
    setUsers((prev) => prev.map((u) => (u.id === updated.id ? updated : u)));

    // Record in recommendation history
    const topSkills = Object.entries(profile.skills || {})
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([k, v]) => `${k} (${v}/10)`);

    const newHistoryEntry: RecommendationHistoryEntry = {
      id: `hist-${Date.now()}`,
      timestamp: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      topCareerTitles: [],
      interestsCount: profile.interests.length,
      topSkills
    };

    setHistory((prev) => [newHistoryEntry, ...prev.slice(0, 15)]);
  };

  const toggleSaveItem = (type: SavedCategory, item: any) => {
    const itemId = item.id || item.slug || `${type}-${item.title}`;
    const exists = savedItems.some((s) => s.itemId === itemId && s.type === type);

    if (exists) {
      setSavedItems((prev) => prev.filter((s) => !(s.itemId === itemId && s.type === type)));
    } else {
      const newItem: SavedItem = {
        id: `saved-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
        type,
        itemId,
        title: item.title || item.name,
        subtitle: item.provider || item.category || item.author || item.type,
        data: item,
        savedAt: new Date().toISOString()
      };
      setSavedItems((prev) => [newItem, ...prev]);
    }
  };

  const isItemSaved = (itemId: string) => {
    return savedItems.some((s) => s.itemId === itemId);
  };

  const toggleStageCompletion = (careerId: string, stageNumber: number) => {
    setCompletedStages((prev) => {
      const existing = prev[careerId] || [];
      const updated = existing.includes(stageNumber)
        ? existing.filter((s) => s !== stageNumber)
        : [...existing, stageNumber].sort((a, b) => a - b);

      return {
        ...prev,
        [careerId]: updated
      };
    });
  };

  const getStageProgress = (careerId: string) => {
    const completed = completedStages[careerId] || [];
    const totalCount = 5;
    const completedCount = completed.length;
    const percentage = Math.round((completedCount / totalCount) * 100);
    return { completedCount, totalCount, percentage };
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        users,
        savedItems,
        completedStages,
        history,
        login,
        signup,
        loginGuestDemo,
        logout,
        updateProfile,
        toggleSaveItem,
        isItemSaved,
        toggleStageCompletion,
        getStageProgress
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
