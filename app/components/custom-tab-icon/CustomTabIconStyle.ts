import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale, width } from '../../theme';

export const styles = StyleSheet.create({
  rootIconViewStyle: {
    marginTop: verticalScale(20),
    width: width / 4,
    alignItems: 'center',
  },
  imageViewStyle: {
    height: moderateScale(20),
    width: moderateScale(20),
  },
  imageStyle: {
    height: '100%',
    width: '100%',
  },
  labelStyle: {
    marginTop: verticalScale(5),
    fontSize: moderateScale(12),
  },
});
