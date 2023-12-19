import { SliderCategory } from '../types/SliderCategory';
import { requests } from '../utils/fetchClient';

export const getSliderPhones = (category: SliderCategory) => {
  return requests.get(`/phones/${category}`);
};
