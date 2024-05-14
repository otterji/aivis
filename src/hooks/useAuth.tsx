import { CODING_TEST_TOKEN, USER_TOKEN_NAME } from '../constants';
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
  const [user, setUser] = useLocalStorage(USER_TOKEN_NAME, '');
  const navigate = useNavigate();

  const login = async (data: any) => {
    // INFO: authenticate api에 CORS block이 되어서 연결은 안했음!
    // getUser({ username, password })
    setUser(CODING_TEST_TOKEN);
    navigate('/project');
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
