import { Dimensions, StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';
import { nunito } from '../../assets';

const { width: screenWidth } = Dimensions.get('window');
const horizontalPadding = moderateScale(15);
const spacingBetweenColumns = moderateScale(10);
const totalHorizontalSpacing = horizontalPadding * 2 + spacingBetweenColumns;
const cardWidth = (screenWidth - totalHorizontalSpacing) / 2;

export const styles = StyleSheet.create({
  container: {
    width: cardWidth,
  },
  image: {
    backgroundColor: '#ccc',
    borderRadius: moderateScale(10),
    width: '100%',
    height: verticalScale(110),
  },
  name: {
    paddingHorizontal: horizontalScale(10),
    position: 'absolute',
    alignSelf: 'flex-start',
    bottom: verticalScale(10),
    color: Colors.white,
    fontFamily: nunito.Regular,
    fontSize: moderateScale(14),
  },
  badge: {
    position: 'absolute',
    top: verticalScale(10),
    right: horizontalScale(11),
    paddingHorizontal: horizontalScale(8),
    paddingVertical: verticalScale(4),
    borderRadius: moderateScale(6),
  },
  badgeText: {
    fontSize: moderateScale(12),
    fontFamily: nunito.Regular,
    color: Colors.black,
  },
  manual: {
    backgroundColor: Colors.manual,
  },
  automatic: {
    backgroundColor: Colors.automatic,
  },
});
