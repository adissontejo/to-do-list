import axios from 'axios';
import { getCookie } from 'cookies-next';

export const api = axios.create({
  baseURL: 'http://localhost:3000',
});

api.interceptors.request.use(config => {
  const token = getCookie('auth-token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
