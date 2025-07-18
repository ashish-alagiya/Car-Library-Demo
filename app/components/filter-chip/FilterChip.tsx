import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../../theme';

interface FilterChipProps {
  label: string;
  selected?: boolean;
  onPress: () => void;
}

const FilterChip: React.FC<FilterChipProps> = ({
  label,
  selected = false,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.chip, selected && styles.chipSelected]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[styles.text, selected && styles.textSelected]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  chip: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 24,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 6,
    backgroundColor: '#F9F9F9',
  },
  chipSelected: {
    backgroundColor: Colors.lightPink,
  },
  text: {
    fontSize: 14,
    color: '#333',
  },
  textSelected: {
    color: '#9B72D2',
    fontWeight: 'bold',
  },
});

export default FilterChip;
