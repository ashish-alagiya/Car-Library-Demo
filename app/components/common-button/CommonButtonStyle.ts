import { StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';
import { nunito } from '../../assets';

const styles = StyleSheet.create({
  iconContainer: {
    padding: horizontalScale(10),
    marginHorizontal: horizontalScale(4),
    borderRadius: moderateScale(50),
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    opacity: 0.8,
  },
  icon: {
    width: horizontalScale(16),
    height: verticalScale(16),
    tintColor: Colors.black,
    margin: moderateScale(2),
  },
  text: {
    fontSize: moderateScale(14),
    fontFamily: nunito.Bold,
    color: Colors.white,
    paddingHorizontal: horizontalScale(4),
  },
});
export default styles;
