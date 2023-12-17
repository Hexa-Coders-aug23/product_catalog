import { requests } from '../utils/fetchClient';

export const getFavorites = (ids: string) => {
  return requests.get(`/phones/many/${ids}`);
};
