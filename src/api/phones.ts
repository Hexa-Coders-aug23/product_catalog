import { requests } from '../utils/fetchClient';

export const getPhones = (
  page: number,
  perPage: number | string,
  sortBy: string,
) => {
  return requests.get('/phones', page, perPage, sortBy);
};

export const getPhone = (phoneId: string) => {
  return requests.get(`/phones/${phoneId}`);
};

export const getRecommendedPhones = (phoneId: string) => {
  return requests.get(`/phones/${phoneId}/recommended`);
};
