import axios from 'axios';

const BASE_URL = 'https://product-catalog-api-hy23.onrender.com';

export const requests = {
  get: (
    pathname: string,
    page?: number,
    perPage?: number | string,
    sortBy?: string,
  ) => (
    axios.get(`${BASE_URL}${pathname}`, {
      params: {
        page,
        perPage,
        sortBy,
      },
    })
  )
    .then(response => response.data)
    .catch((error) => {
      throw new Error(error);
    }),
};
