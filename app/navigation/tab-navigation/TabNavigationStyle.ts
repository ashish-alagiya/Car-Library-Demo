import { StyleSheet } from 'react-native';
import { Colors, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  tabBarBackgroundStyle: {
    backgroundColor: Colors.black,
    borderTopWidth: verticalScale(1),
    height: verticalScale(84),
  },
});
