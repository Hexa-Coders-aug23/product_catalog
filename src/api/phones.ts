/* eslint-disable no-useless-catch */
import { PhoneResponse } from '../types/Responses';
import { httpClient } from '../utils/httpClient';

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
  return httpClient.get(`/phones/${phoneId}`);
};
