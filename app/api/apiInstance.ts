import axios, { AxiosInstance } from 'axios';
import { EndPoint } from '../constants';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: EndPoint.baseUrl,
  timeout: 10000, // timeout to avoid hanging requests
});

axiosInstance.interceptors.response.use(
  response => response,
  error => Promise.reject(error),
);
axiosInstance.interceptors.request.use(
  async config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
