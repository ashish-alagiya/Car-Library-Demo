import React from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';
import { CarCard } from '../../components/car-card/CarCard';
import { InputField } from '../../components/input_container/Input';
import { styles } from './CarLibraryScreenStyle';
import { Icons } from '../../assets';
import CommonButton from '../../components/common-button/CommonButton';
import { Colors, moderateScale } from '../../theme';
import useCarLibrary from './useCarLibraryScreen';
import { ActivityLoader, FilterBottomSheet, SortBottomSheet } from '../../components';

const CarLibraryScreen = () => {
  const {
    loading,
    error,
    sheetRef,
    handleSnapPress,
    handleClosePress,
    filteredCars,
    handleRefresh,
    handlePress,
    search,
    setSearch,
    sortSheetRef,
    handleSortingBsPress,
    handleSortSelect,
    applyFilters,
    resetFilters,
  } = useCarLibrary();

  return (
    <SafeAreaView style={[styles.container, { flex: 1 }]}>
      <ActivityLoader isVisible={loading} />
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
        <CommonButton icon={Icons.sortIcon} onPress={handleSortingBsPress} />
        <CommonButton icon={Icons.filterIcon} onPress={handleSnapPress} />
        <CommonButton
          icon={Icons.applyIcon}
          onPress={() => console.log('Apply')}
        />
      </View>

      {error ? (
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
      <FilterBottomSheet 
        ref={sheetRef} 
        onApplyFilters={applyFilters}
        onResetFilters={resetFilters}
      />
      <SortBottomSheet ref={sortSheetRef} onSortSelect={handleSortSelect} />
    </SafeAreaView>
  );
};

export default CarLibraryScreen;
