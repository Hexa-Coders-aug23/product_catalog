/* eslint-disable no-useless-catch */
import { createClient } from './index';
import * as authService from '../../api/auth';
import { accessTokenService } from '../services/accessTokenService';

export const httpClient = createClient();

function onRequest(request: any) {
  const accessToken = localStorage.getItem('accessToken');

  if (accessToken) {
    // eslint-disable-next-line no-param-reassign
    request.headers.Authorization = `Bearer ${accessToken}`;
  }

  return request;
}

function onResponseSuccess(res: any) {
  return res.data;
}

async function onResponseError(error: any) {
  const originalRequest = error.config;

  if (!error.response || error.response.status !== 401) {
    throw error;
  }

  try {
    const { data: { accessToken } } = await authService.refresh();

    accessTokenService.save(accessToken);

    return await httpClient.request(originalRequest);
  } catch (err) {
    throw err;
  }
}

httpClient.interceptors.request.use(onRequest);
httpClient.interceptors.response.use(onResponseSuccess, onResponseError);
