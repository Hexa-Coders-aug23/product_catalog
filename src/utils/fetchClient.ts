import axios from 'axios';

const BASE_URL = 'https://mate.academy/students-api';
const requests = {
  get: (pathname: string) => axios.get(`${BASE_URL}${pathname}`),
};

export const get = () => requests.get('/url');
