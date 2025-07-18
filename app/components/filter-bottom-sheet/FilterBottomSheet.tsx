import React, { forwardRef, useMemo, useState } from 'react';
import { Image, Pressable, View, Animated } from 'react-native';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import AppText from '../app-text/AppText';
import { styles } from './FilterBottomSheetStyle';
import FilterChip from '../filter-chip/FilterChip';
import { Icons } from '../../assets';
import CommonButton from '../common-button/CommonButton';
import { Colors } from '../../theme';

const carTypeOptions = ['Manual', 'Automatic'];

const specificationOptions = [
  'Engine: 5.0L Ti-VCT V8',
  'Displacement: 4951 cc',
  'Fuel Type: Petrol',
  'Mileage (ARAI): 7.9 km/l',
  'Top Speed: 250 km/h',
  'Max Power: 401 PS @ 6500 rpm',
  'Emission Standard: BS4',
];

const FilterBottomSheet = forwardRef<BottomSheetMethods, {}>((_, ref) => {
  const snapPoints = useMemo(() => ['25%', '50%', '80%'], []);

  const [selectedCarType, setSelectedCarType] = useState<string | null>(null);
  const [selectedSpecifications, setSelectedSpecifications] = useState<
    string[]
  >([]);

  const [showCarType, setShowCarType] = useState(true);
  const [showSpecs, setShowSpecs] = useState(true);

  const toggleCarType = (type: string) => {
    setSelectedCarType(prev => (prev === type ? null : type));
  };

  const toggleSpecification = (spec: string) => {
    setSelectedSpecifications(prev =>
      prev.includes(spec) ? prev.filter(s => s !== spec) : [...prev, spec],
    );
  };

  const handleApplyPress = () => {
    console.log('handleApplyPress');
  };

  const renderBackdrop = (props: BottomSheetBackdropProps) => (
    <BottomSheetBackdrop
      {...props}
      disappearsOnIndex={-1}
      appearsOnIndex={0}
      opacity={0.7}
    />
  );

  return (
    <BottomSheet
      ref={ref}
      index={-1}
      enablePanDownToClose
      snapPoints={snapPoints}
      enableDynamicSizing={false}
      backdropComponent={renderBackdrop}
    >
      <BottomSheetView style={styles.bottomSheet}>
        <View style={styles.horizontalRow}>
          <AppText style={styles.filterText}>Filter By</AppText>
          <View style={styles.rowContainer}>
            <Image
              source={Icons.resetIcon}
              style={styles.resetIconStyle}
              resizeMode="contain"
            />
            <AppText>Reset</AppText>
          </View>
        </View>
        <View style={styles.horizontalRow}>
          <AppText style={styles.sectionHeader}>CAR TYPE</AppText>
          <Pressable onPress={() => setShowCarType(prev => !prev)} hitSlop={20}>
            <Animated.Image
              source={Icons.arrowUp}
              resizeMode="contain"
              style={[
                styles.arrowUpStyle,
                {
                  transform: [{ rotate: showCarType ? '0deg' : '180deg' }],
                },
              ]}
            />
          </Pressable>
        </View>
        {showCarType && (
          <View style={styles.chipContainer}>
            {carTypeOptions.map(option => (
              <FilterChip
                key={option}
                label={option}
                selected={selectedCarType === option}
                onPress={() => toggleCarType(option)}
              />
            ))}
          </View>
        )}

        <View style={styles.bottomLine} />
        <View style={styles.horizontalRow}>
          <AppText style={styles.sectionHeader}>SPECIFICATIONS</AppText>
          <Pressable onPress={() => setShowSpecs(prev => !prev)} hitSlop={20}>
            <Animated.Image
              source={Icons.arrowUp}
              resizeMode="contain"
              style={[
                styles.arrowUpStyle,
                {
                  transform: [{ rotate: showSpecs ? '0deg' : '180deg' }],
                },
              ]}
            />
          </Pressable>
        </View>
        {showSpecs && (
          <View style={styles.chipContainer}>
            {specificationOptions.map(spec => (
              <FilterChip
                key={spec}
                label={spec}
                selected={selectedSpecifications.includes(spec)}
                onPress={() => toggleSpecification(spec)}
              />
            ))}
          </View>
        )}
        <CommonButton
          text="Apply"
          backgroundColor={Colors.primary100}
          style={styles.applyBtn}
          onPress={handleApplyPress}
        />
      </BottomSheetView>
    </BottomSheet>
  );
});

export default FilterBottomSheet;
