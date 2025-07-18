import React, { useMemo, forwardRef, useCallback, useState, useRef, useImperativeHandle } from 'react';
import { Pressable, Image, TouchableOpacity, StyleSheet } from 'react-native';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import AppText from '../app-text/AppText';
import { Icons } from '../../assets';
import { Colors } from '../../theme';
import { styles as baseStyles, styles } from './SortBottomSheetStyle';

type SortOption = {
  label: string;
  icon: any;
  sortBy: string;
  sortOrder: string;
};

const sortOptions: SortOption[] = [
  {
    label: 'Sort by A - Z',
    icon: Icons.sortingDownIcon,
    sortBy: 'name',
    sortOrder: 'ASC',
  },
  {
    label: 'Sort by Date Modified',
    icon: Icons.sortingUpIcon,
    sortBy: 'createdAt',
    sortOrder: 'DESC',
  },
];

const SortBottomSheet = forwardRef<
  BottomSheetMethods,
  { onSortSelect: (option: SortOption) => void }
>((props, ref) => {
  const { onSortSelect } = props;
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [selectedOption, setSelectedOption] = useState<SortOption | null>(null);

  // Expose all required BottomSheetMethods to parent via ref
  useImperativeHandle(ref, () => ({
    snapToIndex: (index: number) => bottomSheetRef.current?.snapToIndex(index) as void,
    snapToPosition: (position: number | string) => bottomSheetRef.current?.snapToPosition(position) as void,
    expand: () => bottomSheetRef.current?.expand() as void,
    collapse: () => bottomSheetRef.current?.collapse() as void,
    close: () => bottomSheetRef.current?.close() as void,
    forceClose: () => bottomSheetRef.current?.forceClose() as void,
  }));

  const handleSortSelect = useCallback(
    (option: SortOption) => {
      setSelectedOption(option);
      onSortSelect(option);
      bottomSheetRef.current?.close();
    },
    [onSortSelect],
  );
  const snapPoints = useMemo(() => ['25%', '45%'], []);

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
      ref={bottomSheetRef}
      index={-1}
      enablePanDownToClose
      snapPoints={snapPoints}
      enableDynamicSizing={false}
      backdropComponent={renderBackdrop}
    >
      <BottomSheetView style={styles.container}>
        {sortOptions.map((item, index) => {
          return (
            <TouchableOpacity
              style={[
                styles.headerRow,
                item === selectedOption && styles.selectedItem,
              ]}
              key={`${index.toString()}`}
              activeOpacity={0.8}
              onPress={() => handleSortSelect(item)}
            >
              <AppText style={styles.title}>{item.label}</AppText>
              <Pressable hitSlop={20}>
                <Image
                  source={item.icon}
                  resizeMode="contain"
                  style={styles.arrowIcon}
                />
              </Pressable>
            </TouchableOpacity>
          );
        })}
      </BottomSheetView>
    </BottomSheet>
  );
});

export default SortBottomSheet;
