import { StyleSheet } from 'react-native';
import {
  verticalScale,
  moderateScale,
  Colors,
  horizontalScale,
} from '../../theme';
import { nunito } from '../../assets';

export const styles = StyleSheet.create({
  container: {
    padding: moderateScale(16),
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: verticalScale(16),
    paddingHorizontal: horizontalScale(8),
  },
  title: {
    fontSize: moderateScale(16),
    fontFamily: nunito.SemiBold,
    color: Colors.black,
    marginEnd: horizontalScale(6),
  },
  arrowIcon: {
    width: moderateScale(14),
    height: moderateScale(14),
  },
  selectedItem: {
    backgroundColor: Colors.lightPink,
    paddingVertical: verticalScale(8),
    borderRadius: moderateScale(8),
  },
});
