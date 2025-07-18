import { StyleSheet } from "react-native";
import { Colors, horizontalScale, moderateScale, verticalScale } from "../../theme";




export const styles = StyleSheet.create({
  wrapper: {

    marginBottom: verticalScale(10),
    marginLeft:horizontalScale(10),
  },
  inputContainer: {
    
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 30,
    paddingHorizontal: horizontalScale(7),
    height: verticalScale(40),
  },
  inputTouchable: {
    flex: 1,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: moderateScale(14),
  },
  iconLeft: {
    marginRight: horizontalScale(8),
 
  },
  iconRight: {
    marginLeft: horizontalScale(8),

  },
  errorBorder: {
    borderWidth: 1,
    borderColor:"#f71414ff" ,
  },
  errorText: {
    marginTop: 4,
    color: '#f71414ff',
    fontSize: 12,
  },
    //iconStyle:{ width: horizontalScale(22), height: horizontalScale(22),alignSelf:'center' }
});
