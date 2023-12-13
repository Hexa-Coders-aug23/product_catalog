import { requests } from '../utils/fetchClient';

export const getPhones = () => {
  return requests.get('/phones');
};

export const getPhone = (phoneId: number) => {
  return requests.get(`/phones/${phoneId}`);
};
