
import { useEffect, useState } from 'react';
import { Car } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../redux';
import { AppDispatch, RootState } from '../../redux/Store';


 const useCarLibrary = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { cars, loading, error } = useSelector(
    (state: RootState) => state.carsList,
  );
///console.log('cars:::', JSON.stringify(cars))
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return {
    loading,
    cars,
    error,
  };
};
export default useCarLibrary