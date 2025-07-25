import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../redux';
import { setFilteredCars } from '../../redux/CarSlice';
import { AppDispatch, RootState } from '../../redux/Store';
import BottomSheet from '@gorhom/bottom-sheet';
import { useIsFocused, useNavigation } from '@react-navigation/native';
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
  const searchDebounceRef = useRef<NodeJS.Timeout | null>(null);
  const [sortBy, setSortBy] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<string>('');
  const [carType, setCarType] = useState<string>('');
  const [tags, setTags] = useState<string>('');

  const { cars, loading, error } = useSelector(
    (state: RootState) => state.carsList,
  ) as { cars: CarType[]; loading: boolean; error: string | null };

  const fetchCarsWithFilters = useCallback(async () => {
    const params: Record<string, string> = {};
    if (search) params['search'] = search;
    if (sortBy) params['sortBy'] = sortBy;
    if (sortOrder) params['sortOrder'] = sortOrder;
    if (carType) params['carType'] = carType.toLowerCase();
    if (tags) params['tags'] = tags;

    const response = await getFilteredCars(params);
    dispatch(setFilteredCars(response));
  }, [search, sortBy, sortOrder, carType, tags, dispatch]);

  useEffect(() => {
    if (searchDebounceRef.current) {
      clearTimeout(searchDebounceRef.current);
    }
    searchDebounceRef.current = setTimeout(() => {
      fetchCarsWithFilters();
    }, 300);
    return () => {
      if (searchDebounceRef.current) {
        clearTimeout(searchDebounceRef.current);
      }
    };
  }, [search, sortBy, sortOrder, carType, tags, fetchCarsWithFilters]);

  const applyFilters = useCallback(
    (selectedCarType: string | null, selectedSpecs: string[]) => {
      setCarType(selectedCarType || '');
      setTags(selectedSpecs.join(','));
    },
    [],
  );

  const resetFilters = useCallback(() => {
    setCarType('');
    setTags('');
    setSortBy('');
    setSortOrder('');
    dispatch(fetchCars());
  }, [dispatch]);

  const handleClosePress = () => {
    sheetRef.current?.close();
  };

  const handleSnapPress = () => {
    sheetRef.current?.snapToIndex(2);
  };

  const handleSortingBsPress = () => {
    sortSheetRef.current?.snapToIndex(1);
  };

  const handlePress = () => {
    navigation.navigate('AddNewCar');
  };

  const handleSortSelect = (option: { sortBy: string; sortOrder: string }) => {
    setSortBy(option.sortBy);
    setSortOrder(option.sortOrder);
  };

  const isFocus = useIsFocused();

  useEffect(() => {
    if (isFocus) {
      dispatch(fetchCars());
    }
  }, [isFocus]);

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
    handleRefresh: fetchCarsWithFilters,
    handlePress,
    search,
    setSearch,
    sortSheetRef,
    handleSortingBsPress,
    handleSortSelect,
    applyFilters,
    resetFilters,
  };
};
export default useCarLibrary;
