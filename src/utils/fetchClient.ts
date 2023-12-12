import axios from 'axios';

const BASE_URL = 'https://product-catalog-api-hy23.onrender.com';

export const requests = {
  get: (pathname: string) => axios.get(`${BASE_URL}${pathname}`)
    .then(response => response.data)
    .catch((error) => {
      throw new Error(error);
    }),
};
