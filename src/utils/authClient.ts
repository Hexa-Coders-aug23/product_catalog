import axios from 'axios';
import { Register } from '../types/Register';

const BASE_URL = 'https://product-catalog-api-hy23.onrender.com';

export const requests = {
  post: (
    pathname: string,
    {
      name,
      email,
      password,
    }: Register,
  ) => (
    axios.post(`${BASE_URL}${pathname}`, {
      name,
      email,
      password,
    })
  )
    .then(response => response.data)
    .catch((error) => {
      throw new Error(error);
    }),
};
