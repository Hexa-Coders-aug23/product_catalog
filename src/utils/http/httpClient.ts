/* eslint-disable no-useless-catch */
import { createClient } from './index';
import { accessTokenService } from '../services/accessTokenService';
import { authService } from '../services/authService';

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
    const { accessToken } = await authService.refresh(
    ) as unknown as { accessToken: string };

    accessTokenService.save(accessToken);

    return await httpClient.request(originalRequest);
  } catch (err) {
    throw err;
  }
}

httpClient.interceptors.request.use(onRequest);
httpClient.interceptors.response.use(onResponseSuccess, onResponseError);
