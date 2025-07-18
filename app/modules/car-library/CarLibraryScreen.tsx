import React, { useRef, useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  SafeAreaView,
  FlatList,
  Animated,
  Easing,
} from 'react-native';
import { CarCard } from '../../components/car-card/CarCard';
import { InputField } from '../../components/input_container/Input';
import { styles } from './CarLibraryScreenStyle';
import { Icons } from '../../assets';
import { CarType } from '../../types';
import CommonButton from '../../components/common-button/CommonButton';
import { Colors, moderateScale } from '../../theme';
import useCarLibrary from './useCarLibraryScreen';
import {
  ActivityLoader,
  FilterBottomSheet,
  SortBottomSheet,
} from '../../components';
import EmptyState from '../../components/empty-state/EmptyState';

const CarLibraryScreen = () => {
  const {
    loading,
    error,
    sheetRef,
    handleSnapPress,
    filteredCars,
    handleRefresh,
    handlePress,
    search,
    setSearch: setSearchQuery,
    sortSheetRef,
    handleSortingBsPress,
    handleSortSelect,
    applyFilters,
    resetFilters,
  } = useCarLibrary();

  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [displaySearch, setDisplaySearch] = useState('');
  const searchTimeoutRef = useRef<NodeJS.Timeout>();
  const searchAnimation = useRef(new Animated.Value(0)).current;

  const handleSearchFocus = useCallback(() => {
    setIsSearchFocused(true);
    Animated.timing(searchAnimation, {
      toValue: 1,
      duration: 200,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, []);

  const handleSearchBlur = useCallback(() => {
    if (!displaySearch) {
      setIsSearchFocused(false);
      Animated.timing(searchAnimation, {
        toValue: 0,
        duration: 200,
        easing: Easing.out(Easing.ease),
        useNativeDriver: false,
      }).start();
    }
  }, [displaySearch]);

  const handleSearchChange = (text: string) => {
    setDisplaySearch(text);

    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    searchTimeoutRef.current = setTimeout(() => {
      setSearchQuery(text);
    }, 300);
  };

  const handleSearchClear = useCallback(() => {
    setDisplaySearch('');
    setSearchQuery('');
    Keyboard.dismiss();
  }, []);

  const handleCancelPress = useCallback(() => {
    handleSearchClear();
    handleSearchBlur();
  }, [handleSearchClear, handleSearchBlur]);

  const handleCancelPressOld = () => {
    handleSearchClear();
    setIsSearchFocused(false);
    searchAnimation.setValue(0);
  };

  const buttonsTranslateX = searchAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100],
  });

  const buttonsOpacity = searchAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={[styles.container, { flex: 1 }]}>
        <ActivityLoader isVisible={loading} />

        {!isSearchFocused && (
          <View style={styles.newCarBtnContainer}>
            <CommonButton
              text="+ New Car"
              backgroundColor={Colors.primary100}
              onPress={handlePress}
            />
          </View>
        )}

        <View style={styles.headerContainer}>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <View
              style={[
                styles.searchContainer,
                isSearchFocused && styles.searchContainerFocused,
              ]}
            >
              <View style={styles.inputField}>
                <Image
                  source={Icons.searchIcon}
                  style={[styles.icon, { marginRight: 8 }]}
                />
                <TextInput
                  value={displaySearch}
                  onChangeText={handleSearchChange}
                  placeholder="Search"
                  style={styles.searchInput}
                  onFocus={handleSearchFocus}
                  onBlur={handleSearchBlur}
                  autoCorrect={false}
                  returnKeyType="search"
                  onSubmitEditing={Keyboard.dismiss}
                />
                {displaySearch ? (
                  <TouchableOpacity
                    onPress={handleSearchClear}
                    style={styles.clearButton}
                  >
                    <Image source={Icons.crossIcon} style={styles.closeIcon} />
                  </TouchableOpacity>
                ) : null}
              </View>
            </View>
            {isSearchFocused && (
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={handleCancelPress}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            )}
          </View>

          <Animated.View
            style={[
              styles.actionButtonsContainer,
              {
                opacity: buttonsOpacity,
                transform: [{ translateX: buttonsTranslateX }],
                width: isSearchFocused ? 0 : 'auto',
              },
            ]}
            pointerEvents={isSearchFocused ? 'none' : 'auto'}
          >
            <CommonButton
              icon={Icons.sortIcon}
              onPress={handleSortingBsPress}
              style={styles.actionButton}
            />
            <CommonButton
              icon={Icons.filterIcon}
              onPress={handleSnapPress}
              style={styles.actionButton}
            />
            <CommonButton
              icon={Icons.applyIcon}
              onPress={() => console.log('Apply')}
              style={styles.actionButton}
            />
          </Animated.View>
        </View>

        {error ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
            <TouchableOpacity
              style={styles.retryButton}
              onPress={handleRefresh}
            >
              <Text style={styles.retryButtonText}>Retry</Text>
            </TouchableOpacity>
          </View>
        ) : filteredCars.length > 0 ? (
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
            renderItem={({ item }: { item: CarType }) => <CarCard car={item} />}
            keyboardShouldPersistTaps="handled"
          />
        ) : (
          <EmptyState searchQuery={search} />
        )}
        <FilterBottomSheet
          ref={sheetRef}
          onApplyFilters={applyFilters}
          onResetFilters={resetFilters}
        />
        <SortBottomSheet ref={sortSheetRef} onSortSelect={handleSortSelect} />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default CarLibraryScreen;
