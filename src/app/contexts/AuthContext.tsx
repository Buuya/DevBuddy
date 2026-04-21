import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  username: string;
  email: string;
  avatar_url?: string;
  role: 'user' | 'admin' | 'moderator';
  xp: number;
  level: number;
  streak_days: number;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user for development - replace with Supabase auth when connected
const MOCK_USER: User = {
  id: '1',
  username: 'Ayub',
  email: 'ayub@devbuddy.dev',
  role: 'admin',
  xp: 2450,
  level: 8,
  streak_days: 12,
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check localStorage for existing session
    const stored = localStorage.getItem('devbuddy-user');
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  const login = async (email: string, password: string) => {
    // TODO: Replace with Supabase auth when connected
    // For now, just set mock user
    setUser(MOCK_USER);
    localStorage.setItem('devbuddy-user', JSON.stringify(MOCK_USER));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('devbuddy-user');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
        isAdmin: user?.role === 'admin' || user?.role === 'moderator',
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
