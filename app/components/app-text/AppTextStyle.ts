// Define styles for the custom text component.
// Set the font size using a scaling function to ensure proper sizing
// Set the color of the text. The color is imported from a centralized theme file for consistency

import { StyleSheet } from 'react-native';
import { Colors, moderateScale } from '../../theme';

export const styles = StyleSheet.create({
  fontStyle: {
    fontSize: moderateScale(16),
    color: Colors.black,
  },
});
