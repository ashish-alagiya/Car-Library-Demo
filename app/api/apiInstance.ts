import axios, { AxiosInstance } from 'axios';
import { EndPoint } from '../constants';
import { AsyncStorageService } from '../utils';

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
    const token = await AsyncStorageService.loadAccessToken();
    if (token) {
      const parsedOuter = JSON.parse(token?.token);
      const authorizationToken = parsedOuter.token;
      config.headers.Authorization = `Bearer ${authorizationToken}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
