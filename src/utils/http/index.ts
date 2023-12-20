import axios from 'axios';

export function createClient() {
  return axios.create({
    baseURL: 'https://product-catalog-api-hy23.onrender.com',
    withCredentials: true,
  });
}
