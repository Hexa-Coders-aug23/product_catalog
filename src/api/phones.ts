/* eslint-disable no-useless-catch */
import { PhoneResponse } from '../types/Responses';
import { httpClient } from '../utils/httpClient';
import { requests } from '../utils/fetchClient';

export const getPhones = async (
  page: number,
  perPage: number | string,
  sortBy: string,
) => {
  try {
    const response = await httpClient.get('/phones', {
      params: { page, perPage, sortBy },
    }) as PhoneResponse;

    return response;
  } catch (error) {
    throw error;
  }
};

export const getPhone = (phoneId: string) => {
  return requests.get(`/phones/${phoneId}`);
};
