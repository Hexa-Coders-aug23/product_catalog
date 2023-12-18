/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState } from 'react';
import * as authService from '../api/auth';

export const AuthContext = createContext({
  authorized: false,
  login: (username: string, password: string) => Promise.resolve(),
});

type Props = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [authorized, setAuthorized] = useState(false);

  const login = async (email: string, password: string) => {
    authService.login({ email, password })
      .then((response) => {
        setAuthorized(true);
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  };

  return (
    <AuthContext.Provider value={{ authorized, login }}>
      {children}
    </AuthContext.Provider>
  );
};
