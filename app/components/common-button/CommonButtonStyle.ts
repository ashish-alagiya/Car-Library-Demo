import { StyleSheet } from "react-native";
import { Colors, horizontalScale, verticalScale } from "../../theme";

 const styles = StyleSheet.create({
  iconContainer: {
    padding: horizontalScale(12),
    marginHorizontal:horizontalScale(4),
    borderRadius: 100,
    backgroundColor:Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  icon: {
    width: horizontalScale(18),
    height: verticalScale(18),
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.black,
    marginHorizontal: horizontalScale(4),
  },
});
export default styles;