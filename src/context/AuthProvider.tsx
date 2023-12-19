/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useMemo, useState } from 'react';
import * as authService from '../api/auth';
import { Login } from '../types/Login';
import { accessTokenService } from '../utils/accessTokenService';
import { User } from '../types/User';

export type AuthContextType = {
  isChecked: boolean;
  currentUser: User | null;
  checkAuth: () => Promise<void>;
  activate: (token: string) => Promise<void>;
  login: (login: Login) => Promise<void>;
  logout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>({
  isChecked: true,
  currentUser: null,
  checkAuth: async () => {},
  activate: async (_token: string) => {},
  login: async (_user: Login) => {},
  logout: async () => {},
});

type Props = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isChecked, setChecked] = useState(true);

  const activate = async (activationToken: string) => {
    const { data: { accessToken, user } } = await authService
      .activate(activationToken);

    accessTokenService.save(accessToken);
    setCurrentUser(user);
  };

  const checkAuth = async () => {
    try {
      const { data: { accessToken, user } } = await authService.refresh();

      accessTokenService.save(accessToken);
      setCurrentUser(user);
    } catch (error) {
      throw new Error('User is not authentincated');
    } finally {
      setChecked(true);
    }
  };

  const login = async ({ email, password }: Login) => {
    const { accessToken, user } = await authService
      .login({ email, password });

    accessTokenService.save(accessToken);
    setCurrentUser(user);
  };

  const logout = async () => {
    await authService.logout();

    accessTokenService.remove();
    setCurrentUser(null);
  };

  const value: AuthContextType = useMemo(() => ({
    isChecked,
    currentUser,
    checkAuth,
    activate,
    login,
    logout,
  }), [currentUser, isChecked]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
