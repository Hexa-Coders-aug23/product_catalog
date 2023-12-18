import { Register } from '../types/Register';
import { requests } from '../utils/authClient';

export const register = ({ name, email, password }: Register) => {
  return requests.post('/registration', { name, email, password });
};
