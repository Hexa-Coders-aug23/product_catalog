import { requests } from '../utils/fetchClient';

export const getPhones = (
  page: number,
  perPage: number | string,
  sortBy: string,
) => {
  return requests.get('/phones', page, perPage, sortBy);
};

export const getPhone = (phoneId: number) => {
  return requests.get(`/phones/${phoneId}`);
};
