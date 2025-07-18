import { CarType } from '../types';
import { axiosInstance } from './apiInstance';

//Get All Cars
export const getAllCars = async (): Promise<CarType[]> => {
  try {
    const response = await axiosInstance.get('/cars');
    return response.data;
  } catch (error) {
    throw error;
  }
};

//Get Cars with Filters
export const getFilteredCars = async (params: Record<string, any>) => {
  const response = await axiosInstance.get('/cars', { params });
  return response.data;
};

export const getCarDetails = async (carId: string) => {
  const response = await axiosInstance.get(`/cars/${carId}`);
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

//Delete Car
export const deleteCar = async (id: number) => {
  const response = await axiosInstance.delete(`/cars/${id}`);
  return response;
};
