import { StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';
import { nunito } from '../../assets';

export const styles = StyleSheet.create({
  container: {
    //alignItems: 'center',
    flex: 1,
    paddingHorizontal: horizontalScale(15),
   // width: '48%',
    marginBottom: verticalScale(10),
  },
  image: {
    //flex:1,
    backgroundColor:'#ccc',
    borderRadius: 10,
    width: horizontalScale(158.3),
    height: verticalScale(106),
  },
  name: {
    paddingHorizontal:horizontalScale(10),
    position: 'absolute',
    alignSelf: 'flex-start',
    bottom: verticalScale(10),
    left: horizontalScale(15),
    color: Colors.white,
    fontFamily: nunito.Regular,
    fontSize: moderateScale(14),
  },
  badge: {
    position: 'absolute',
    top: verticalScale(10),
    right: horizontalScale(25),
    paddingHorizontal: horizontalScale(8),

    paddingVertical: verticalScale(4),
    borderRadius: 6,
  },
  badgeText: {
    fontSize: moderateScale(10),
    fontFamily: nunito.Regular,
  },
  manual: {
    backgroundColor: Colors.manual,
  },
  automatic: {
    backgroundColor: Colors.automatic,
  },
});
