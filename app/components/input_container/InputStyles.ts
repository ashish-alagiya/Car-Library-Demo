import { StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

export const styles = StyleSheet.create({
  wrapper: {
    marginBottom: verticalScale(10),
  },
  inputContainer: {
    height: verticalScale(56),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 50,
    paddingHorizontal: horizontalScale(20),
    borderWidth: 1,
    borderColor: Colors.bordercolor,
  },
  inputTouchable: {
    flex: 1,
  },
  iconLeft: {
    marginRight: horizontalScale(8),
  },
  iconRight: {
    marginLeft: horizontalScale(8),
  },
  errorBorder: {
    borderWidth: 1,
    borderColor: Colors.error,
  },
  errorText: {
    color: Colors.error,
    fontSize: moderateScale(12),
  },
  errorContainer: {
    alignItems: 'flex-end',
    bottom: verticalScale(22),
  },
});
