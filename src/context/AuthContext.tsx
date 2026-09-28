import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
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
  authNotice: string | null;
  setAuthNotice: (notice: string | null) => void;
  welcomeMessage: string | null;
  clearWelcomeMessage: () => void;
  login: (email: string, password: string) => { success: boolean; error?: string; isNewUser?: boolean };
  signup: (name: string, email: string, password: string, confirmPassword?: string) => { success: boolean; error?: string; isNewUser?: boolean };
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

const DEFAULT_USERS: User[] = [
  {
    id: 'user-demo-aarav',
    name: 'Aarav Sharma',
    email: 'aarav.sharma@nexora.ai',
    password: 'password123',
    profile: defaultDemoProfile,
    createdAt: new Date().toISOString()
  }
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 1. Registered Users list (localStorage persisted)
  const [users, setUsers] = useState<User[]>(() => {
    try {
      const saved = localStorage.getItem(USERS_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
      return DEFAULT_USERS;
    } catch {
      return DEFAULT_USERS;
    }
  });

  // 2. Active Session (localStorage persisted)
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    try {
      const active = localStorage.getItem(CURRENT_USER_KEY);
      return active ? JSON.parse(active) : null;
    } catch {
      return null;
    }
  });

  // 3. User feedback notices (login gate notice & animated welcome toast)
  const [authNotice, setAuthNotice] = useState<string | null>('Please sign in to continue');
  const [welcomeMessage, setWelcomeMessage] = useState<string | null>(null);

  const clearWelcomeMessage = useCallback(() => {
    setWelcomeMessage(null);
  }, []);

  // 4. Per-user isolated state
  const [savedItems, setSavedItems] = useState<SavedItem[]>([]);
  const [completedStages, setCompletedStages] = useState<Record<string, number[]>>({});
  const [history, setHistory] = useState<RecommendationHistoryEntry[]>([]);

  // Load isolated data when active user changes
  useEffect(() => {
    if (!currentUser) {
      setSavedItems([]);
      setCompletedStages({});
      setHistory([]);
      return;
    }

    const emailKey = currentUser.email.toLowerCase().trim();
    try {
      const savedData = localStorage.getItem(`nexora_saved_${emailKey}`);
      setSavedItems(savedData ? JSON.parse(savedData) : []);
    } catch {
      setSavedItems([]);
    }

    try {
      const stagesData = localStorage.getItem(`nexora_stages_${emailKey}`);
      setCompletedStages(stagesData ? JSON.parse(stagesData) : (currentUser.profile ? { 'ai-ml-engineer': [1] } : {}));
    } catch {
      setCompletedStages({});
    }

    try {
      const histData = localStorage.getItem(`nexora_history_${emailKey}`);
      setHistory(histData ? JSON.parse(histData) : []);
    } catch {
      setHistory([]);
    }
  }, [currentUser?.email]);

  // Sync users list to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
    } catch (e) {
      console.error('Failed to sync users to localStorage', e);
    }
  }, [users]);

  // Sync current user session
  useEffect(() => {
    try {
      if (currentUser) {
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(currentUser));
      } else {
        localStorage.removeItem(CURRENT_USER_KEY);
      }
    } catch (e) {
      console.error('Failed to sync current user', e);
    }
  }, [currentUser]);

  // Save isolated items whenever savedItems changes for currentUser
  const persistUserSavedItems = (items: SavedItem[]) => {
    if (!currentUser) return;
    try {
      const emailKey = currentUser.email.toLowerCase().trim();
      localStorage.setItem(`nexora_saved_${emailKey}`, JSON.stringify(items));
    } catch (e) {
      console.error('Failed to persist saved items', e);
    }
  };

  // Save isolated stages whenever completedStages changes
  const persistUserStages = (stages: Record<string, number[]>) => {
    if (!currentUser) return;
    try {
      const emailKey = currentUser.email.toLowerCase().trim();
      localStorage.setItem(`nexora_stages_${emailKey}`, JSON.stringify(stages));
    } catch (e) {
      console.error('Failed to persist stages', e);
    }
  };

  // Save isolated history whenever history changes
  const persistUserHistory = (entries: RecommendationHistoryEntry[]) => {
    if (!currentUser) return;
    try {
      const emailKey = currentUser.email.toLowerCase().trim();
      localStorage.setItem(`nexora_history_${emailKey}`, JSON.stringify(entries));
    } catch (e) {
      console.error('Failed to persist history', e);
    }
  };

  // Login handler
  const login = (email: string, password: string) => {
    const cleanEmail = email.toLowerCase().trim();
    if (!cleanEmail) {
      return { success: false, error: 'Please enter your email address.' };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      return { success: false, error: 'Please enter a valid email address.' };
    }

    if (!password) {
      return { success: false, error: 'Please enter your password.' };
    }

    const existingUser = users.find((u) => u.email.toLowerCase() === cleanEmail);
    if (!existingUser) {
      return {
        success: false,
        error: 'No account found, please sign up.'
      };
    }

    if (existingUser.password && existingUser.password !== password) {
      return {
        success: false,
        error: 'Incorrect email or password.'
      };
    }

    setCurrentUser(existingUser);
    setAuthNotice(null);
    setWelcomeMessage(`Welcome back, ${existingUser.name}! 🌸`);

    // Determine if onboarding is needed
    const isNew = !existingUser.profile;
    return { success: true, isNewUser: isNew };
  };

  // Signup handler
  const signup = (name: string, email: string, password: string, confirmPassword?: string) => {
    const cleanName = name.trim();
    if (!cleanName || cleanName.length < 2) {
      return { success: false, error: 'Please enter your full name (minimum 2 characters).' };
    }

    const cleanEmail = email.toLowerCase().trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      return { success: false, error: 'Please enter a valid email format (e.g. name@domain.com).' };
    }

    if (!password || password.length < 6) {
      return { success: false, error: 'Password must be at least 6 characters long.' };
    }

    if (confirmPassword !== undefined && confirmPassword !== password) {
      return { success: false, error: 'Passwords do not match. Please re-enter.' };
    }

    const emailTaken = users.some((u) => u.email.toLowerCase() === cleanEmail);
    if (emailTaken) {
      return {
        success: false,
        error: 'An account with this email already exists. Please sign in.'
      };
    }

    const newUser: User = {
      id: `user-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      name: cleanName,
      email: cleanEmail,
      password,
      profile: undefined, // Needs onboarding profile
      createdAt: new Date().toISOString()
    };

    setUsers((prev) => [...prev, newUser]);
    setCurrentUser(newUser);
    setAuthNotice(null);
    setWelcomeMessage(`Welcome to NEXORA AI, ${newUser.name}! 🌸`);

    return { success: true, isNewUser: true };
  };

  // Guest Demo instant access
  const loginGuestDemo = () => {
    // Find or create the Aarav demo user
    let demoUser = users.find((u) => u.email === 'aarav.sharma@nexora.ai');
    if (!demoUser) {
      demoUser = DEFAULT_USERS[0];
      setUsers((prev) => [...prev, demoUser!]);
    }
    setCurrentUser(demoUser);
    setAuthNotice(null);
    setWelcomeMessage(`Welcome to NEXORA AI, ${demoUser.name}! 🌸`);
  };

  // Logout handler
  const logout = () => {
    setCurrentUser(null);
    setAuthNotice('You have been logged out');
    setWelcomeMessage(null);
  };

  // Update profile
  const updateProfile = (profile: UserProfile) => {
    if (!currentUser) return;
    const updated: User = {
      ...currentUser,
      profile
    };
    setCurrentUser(updated);
    setUsers((prev) => prev.map((u) => (u.id === updated.id ? updated : u)));

    // Record in history for this specific user
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

    const updatedHistory = [newHistoryEntry, ...history.slice(0, 14)];
    setHistory(updatedHistory);
    persistUserHistory(updatedHistory);
  };

  // Toggle Save Item per user
  const toggleSaveItem = (type: SavedCategory, item: any) => {
    if (!currentUser) return;
    const itemId = item.id || item.slug || `${type}-${item.title}`;
    const exists = savedItems.some((s) => s.itemId === itemId && s.type === type);

    let updated: SavedItem[];
    if (exists) {
      updated = savedItems.filter((s) => !(s.itemId === itemId && s.type === type));
    } else {
      const newItem: SavedItem = {
        id: `saved-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
        type,
        itemId,
        title: item.title || item.name,
        subtitle: item.provider || item.category || item.author || item.type,
        data: item,
        savedAt: new Date().toISOString()
      };
      updated = [newItem, ...savedItems];
    }
    setSavedItems(updated);
    persistUserSavedItems(updated);
  };

  const isItemSaved = (itemId: string) => {
    return savedItems.some((s) => s.itemId === itemId);
  };

  // Toggle stage completion per user
  const toggleStageCompletion = (careerId: string, stageNumber: number) => {
    if (!currentUser) return;
    const existing = completedStages[careerId] || [];
    const updatedStagesList = existing.includes(stageNumber)
      ? existing.filter((s) => s !== stageNumber)
      : [...existing, stageNumber].sort((a, b) => a - b);

    const updatedMap = {
      ...completedStages,
      [careerId]: updatedStagesList
    };
    setCompletedStages(updatedMap);
    persistUserStages(updatedMap);
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
        authNotice,
        setAuthNotice,
        welcomeMessage,
        clearWelcomeMessage,
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
