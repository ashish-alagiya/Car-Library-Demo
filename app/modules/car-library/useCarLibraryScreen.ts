import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../redux';
import { AppDispatch, RootState } from '../../redux/Store';
import BottomSheet from '@gorhom/bottom-sheet';
import { useNavigation } from '@react-navigation/native';
import { AddNewCarNavigationProp } from '../../types';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { getFilteredCars } from '../../api/CarApis';
import { CarType } from '../../types';

const useCarLibrary = () => {
  const dispatch = useDispatch<AppDispatch>();
  const sheetRef = useRef<BottomSheet>(null);
  const sortSheetRef = useRef<BottomSheetMethods>(null);
  const navigation = useNavigation<AddNewCarNavigationProp>();
  const [search, setSearch] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<string>('');

  const { cars, loading, error } = useSelector(
    (state: RootState) => state.carsList,
  ) as { cars: CarType[]; loading: boolean; error: string | null };

  useEffect(() => {
    const fetchSortedCars = async () => {
      try {
        console.log('Fetching cars with params:', {
          search,
          sortBy,
          sortOrder,
        });
        const params: Record<string, string> = {};
        if (search) params['search'] = search;
        if (sortBy) params['sortBy'] = sortBy;
        if (sortOrder) params['sortOrder'] = sortOrder;

        const response = await getFilteredCars(params);
        console.log('Received cars response:', response);
        dispatch(fetchCars(response));
      } catch (error) {
        console.error('Error fetching sorted cars:', error);
      }
    };

    fetchSortedCars();
  }, [search, sortBy, sortOrder, dispatch]);

  const handleClosePress = () => {
    sheetRef.current?.close();
  };

  const handleSnapPress = () => {
    sheetRef.current?.snapToIndex(2);
  };

  const handleSortingBsPress = () => {
    sortSheetRef.current?.snapToIndex(1);
  };

  const handleRefresh = () => {
    dispatch(fetchCars());
  };

  const handlePress = () => {
    navigation.navigate('AddNewCar');
  };

  const handleSortSelect = (option: { sortBy: string; sortOrder: string }) => {
    console.log('Sort option selected:', option);
    setSortBy(option.sortBy);
    setSortOrder(option.sortOrder);
  };

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const filteredCars = cars.filter(car =>
    car.name.toLowerCase().includes(search.toLowerCase()),
  );

  return {
    loading,
    cars,
    error,
    sheetRef,
    handleSnapPress,
    handleClosePress,
    filteredCars: cars.filter(car =>
      car.name.toLowerCase().includes(search.toLowerCase()),
    ),
    handleRefresh,
    handlePress,
    search,
    setSearch,
    sortSheetRef,
    handleSortingBsPress,
    handleSortSelect,
  };
};
export default useCarLibrary;
