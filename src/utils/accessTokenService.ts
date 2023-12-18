const key = 'accessToken';

const get = () => {
  return localStorage.getItem(key);
};

const save = (token: string) => {
  return localStorage.setItem(key, token);
};

const remove = () => {
  return localStorage.removeItem(key);
};

export const accessTokenService = { get, save, remove };
