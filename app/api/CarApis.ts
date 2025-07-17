import { CarType } from '../types';
import { axiosInstance } from './apiInstance';

//Get All Cars
export const getAllCars = async (): Promise<CarType[]> => {
  const response = await axiosInstance.get('/cars');
  return response.data;
};

//Get Cars with Filters
export const getFilteredCars = async (params: Record<string, any>) => {
  const response = await axiosInstance.get('/cars', { params });
  return response.data;
};

//Get Car Detail
export const getCarById = async (id: number) => {
  const response = await axiosInstance.get(`/cars/${id}`);
  return response.data;
};

//Get Car Types
export const getCarTypes = async () => {
  const response = await axiosInstance.get('/cars/types');
  return response.data as string[];
};

//Create Car
export const createCar = async (data: Partial<CarType>) => {
  const response = await axiosInstance.post('/cars', data);
  return response.data;
};

//Get Car Tags
export const getCarTags = async () => {
  const response = await axiosInstance.get('/cars/tags');
  return response.data as string[];
};

//Update Car
export const updateCar = async (id: number, data: Partial<CarType>) => {
  const response = await axiosInstance.patch(`/cars/${id}`, data);
  return response.data;
};

//Delete Car
export const deleteCar = async (id: number) => {
  await axiosInstance.delete(`/cars/${id}`);
};

//Reset DB
export const resetCars = async () => {
  await axiosInstance.post(`/cars/reset`);
};
