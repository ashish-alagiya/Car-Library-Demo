import { StyleSheet } from 'react-native';
import { Colors, moderateScale } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: moderateScale(20),
  },
  image: {
    width: moderateScale(120),
    height: moderateScale(120),
    marginBottom: moderateScale(16),
    tintColor: Colors.black,
  },
  title: {
    fontSize: moderateScale(18),
    fontWeight: '600',
    color: Colors.black,
    textAlign: 'center',
    marginBottom: moderateScale(8),
  },
  iconContainer: {
    width: moderateScale(90),
    height: moderateScale(70),
    borderRadius: moderateScale(40),
    backgroundColor: Colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: moderateScale(16),
  },
  notFoundImg: {
    height: '100%',
    width: '100%',
  },
});
