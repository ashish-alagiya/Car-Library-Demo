import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Text,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CarCard } from '../../components/car-card/CarCard';
import { InputField } from '../../components/input_container/Input';
import { styles } from './CarLibraryScreenStyle';
import { Icons } from '../../assets';
import { fetchCars } from '../../redux/CarSlice';
import { RootState, AppDispatch } from '../../redux/Store';
import CommonButton from '../../components/common-button/CommonButton';
import { Colors, moderateScale } from '../../theme';
import { useNavigation } from '@react-navigation/native';
import { AddNewCarNavigationProp } from '../../types';

const CarLibraryScreen = () => {
  const [search, setSearch] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();
  const { cars, loading, error } = useSelector(
    (state: RootState) => state.carsList,
  );

  const navigation = useNavigation<AddNewCarNavigationProp>();
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const filteredCars = cars.filter(car =>
    car.name.toLowerCase().includes(search.toLowerCase()),
  );

  const handleSort = () => {};
  const handleFilter = () => {};
  const handleRefresh = () => {
    dispatch(fetchCars());
  };
  const handlePress = () => {
    navigation.navigate('AddNewCar');
  };
  return (
    <SafeAreaView style={[styles.container, { flex: 1 }]}>
      <View style={styles.newCarBtnContainer}>
        <CommonButton
          text="+ New Car"
          backgroundColor={Colors.primary100}
          onPress={handlePress}
        />
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.searchContainer}>
          <InputField
            value={search}
            onChangeText={setSearch}
            placeholder="Search"
            leftIcon={Icons.searchIcon}
            onRightIconPress={() => setSearch('')}
            containerStyle={styles.inputField}
            iconStyle={styles.icon}
          />
        </View>
        <CommonButton
          icon={Icons.sortIcon}
          onPress={() => console.log('Sort')}
        />
        <CommonButton
          icon={Icons.filterIcon}
          onPress={() => console.log('Filter')}
        />
        <CommonButton
          icon={Icons.applyIcon}
          onPress={() => console.log('Apply')}
        />
      </View>

      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity style={styles.retryButton} onPress={handleRefresh}>
            <Text style={styles.retryButtonText}>Retry</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={filteredCars}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            marginBottom: moderateScale(10),
          }}
          renderItem={({ item }) => <CarCard car={item} />}
        />
      )}
    </SafeAreaView>
  );
};

export default CarLibraryScreen;
