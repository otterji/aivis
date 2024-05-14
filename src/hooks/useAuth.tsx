import { ReactNode, createContext, useContext, useMemo } from 'react';

import { useLocalStorage } from './useLocalStorage';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  user: string;
  login: (data: any) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useLocalStorage('aivis-token', '');
  const navigate = useNavigate();

  const login = async (data: any) => {
    setUser(data);
    navigate('/profile');
  };

  const logout = () => {
    setUser(null);
    navigate('/', { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
