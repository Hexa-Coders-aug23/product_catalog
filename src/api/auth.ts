import { Login } from '../types/Login';
import { Register } from '../types/Register';
import { requests } from '../utils/authClient';

export const register = ({ name, email, password }: Register) => {
  return requests.post('/registration', { name, email, password });
};

export const login = ({ email, password }: Login) => {
  return requests.post('/login', { email, password });
};

export const logout = () => {
  return requests.post('./logout');
};

export const refresh = () => {
  return requests.get('./refresh');
};

export const activate = (activationToken: string) => {
  return requests.get(`./activation/:${activationToken}`);
};
