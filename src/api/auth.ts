/* eslint-disable no-useless-catch */
import { Login } from '../types/Login';
import { Register } from '../types/Register';
import { LoginResponse } from '../types/Responses';
import { authClient } from '../utils/authClient';

export const register = ({ name, email, password }: Register) => {
  return authClient.post('/registration', { name, email, password });
};

export const login = async ({
  email,
  password,
}: Login): Promise<LoginResponse> => {
  try {
    const response = await authClient
      .post('/login', { email, password }) as LoginResponse;

    return response;
  } catch (error) {
    throw error;
  }
};

export const logout = () => {
  return authClient.post('./logout');
};

export const refresh = () => {
  return authClient.get('./refresh');
};

export const activate = (activationToken: string) => {
  return authClient.get(`./activation/${activationToken}`);
};
