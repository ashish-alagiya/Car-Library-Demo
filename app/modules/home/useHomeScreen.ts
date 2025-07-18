import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/Store';
import { fetchCars } from '../../redux';

const useHomeScreen = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const { cars, loading, error } = useSelector(
//     (state: RootState) => state.carsList,
//   );
// console.log('cars@@@', JSON.stringify(cars))
//   useEffect(() => {
//     dispatch(fetchCars());
//   }, [dispatch]);

//   return {
//     loading,
//     cars,
//     error,
//   };
};

export default useHomeScreen;
