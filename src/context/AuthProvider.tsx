/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState } from 'react';

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
    if (email !== 'asdfgh@gmail.com' || password !== '1234567') {
      throw new Error('Username or password is wrong');
    }

    setAuthorized(true);
  };

  return (
    <AuthContext.Provider value={{ authorized, login }}>
      {children}
    </AuthContext.Provider>
  );
};
