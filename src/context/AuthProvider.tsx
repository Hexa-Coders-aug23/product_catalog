/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  createContext, useEffect, useMemo, useState,
} from 'react';
import { Login } from '../types/Login';
import { accessTokenService } from '../utils/services/accessTokenService';
import { User } from '../types/User';
import { userService } from '../utils/services/userService';
import { authService } from '../utils/services/authService';

export type AuthContextType = {
  isChecked: boolean;
  currentUser: User | null;
  checkAuth: () => Promise<void>;
  activate: (token: string) => Promise<void>;
  login: (login: Login) => Promise<void>;
  logout: () => Promise<void>;
  authenticate: () => Promise<boolean>;
};

export const AuthContext = createContext<AuthContextType>({
  isChecked: true,
  currentUser: null,
  checkAuth: async () => {},
  activate: async (_token: string) => {},
  login: async (_user: Login) => {},
  logout: async () => {},
  authenticate: async (): Promise<boolean> => false,
});

type Props = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isChecked, setChecked] = useState(true);

  const authenticate = async () => {
    try {
      const users = await userService.getAll();

      return true;
    } catch (_) {
      return false;
    }
  };

  const activate = async (activationToken: string) => {
    const {
      accessToken,
      user,
    } = await authService.activate(
      activationToken,
    ) as unknown as { accessToken:any, user: any };

    accessTokenService.save(accessToken);
    setCurrentUser(user);
  };

  const checkAuth = async () => {
    try {
      const {
        accessToken,
        user,
      } = await authService.refresh(
      ) as unknown as { accessToken:any, user: any };

      accessTokenService.save(accessToken);
      setCurrentUser(user);
    } catch (error) {
      throw new Error('User is not authentincated');
    } finally {
      setChecked(true);
    }
  };

  const login = async ({ email, password }: Login) => {
    const {
      accessToken,
      user,
    } = await authService.login(
      { email, password },
    ) as unknown as { accessToken:any, user: any };

    console.log(accessToken, user);

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
    authenticate,
  }), [currentUser, isChecked]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
