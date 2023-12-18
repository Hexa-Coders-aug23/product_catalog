import axios from 'axios';
import { Register } from '../types/Register';
import { Login } from '../types/Login';

const BASE_URL = 'https://product-catalog-api-hy23.onrender.com';

export const requests = {
  post: (
    pathname: string,
    data: Register | Login,
  ) => (
    axios.post(`${BASE_URL}${pathname}`, data)
  )
    .then(response => response.data)
    .catch((error) => {
      throw new Error(error);
    }),
};
