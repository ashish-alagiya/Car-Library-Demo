import { CarType } from '../types';
import { axiosInstance } from './apiInstance';

export const getAllCars = async (): Promise<CarType[]> => {
  const response = await axiosInstance.get('/cars');
  return response.data;
};
