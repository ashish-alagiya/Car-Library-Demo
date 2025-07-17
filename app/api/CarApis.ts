import { axiosInstance } from './apiInstance';

interface GetCarsRequest {}

export const getAllCars = async (
  email: string,
  password: string,
): Promise<GetCarsRequest> => {
  const requestBody: GetCarsRequest = {};
  try {
    const { data } = await axiosInstance.post<any>('URL', requestBody);
    return data;
  } catch (error: any) {
    throw error;
  }
};
