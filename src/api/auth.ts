import { Login } from '../types/Login';
import { Register } from '../types/Register';
import { requests } from '../utils/authClient';

export const register = ({ name, email, password }: Register) => {
  return requests.post('/registration', { name, email, password });
};

export const login = ({ email, password }: Login) => {
  return requests.post('/login', { email, password });
};
