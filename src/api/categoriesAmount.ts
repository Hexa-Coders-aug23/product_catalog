import { requests } from '../utils/fetchClient';

export const getPhonesLength = () => {
  return requests.get('/phones/length');
};

export const getTabletsLength = () => {
  return requests.get('/tablets/length');
};

export const getAccessoriesLength = () => {
  return requests.get('/accessories/length');
};
