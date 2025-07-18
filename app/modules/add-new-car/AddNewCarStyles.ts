import { Platform, StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';
import { nunito } from '../../assets';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop:
      Platform.OS === 'android' ? verticalScale(50) : verticalScale(70),
  },
  scrollContent: {
    paddingHorizontal: horizontalScale(24),
  },
  title: {
    fontSize: moderateScale(24),
    fontFamily: nunito.Bold,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backArrow: {
    height: verticalScale(30),
    width: verticalScale(30),
  },
  inputGroup: {
    marginBottom: verticalScale(8),
    marginTop: verticalScale(20),
  },
  label: {
    fontSize: moderateScale(14),
    marginBottom: verticalScale(6),
    fontFamily: nunito.Regular,
  },
  required: {
    color: Colors.red,
  },
  input: {
    marginBottom: 0,
  },
  descriptionContainer: {
    height: 150,
    padding: 10,
    backgroundColor: Colors.white,
    borderRadius: 8,
  },

  charCount: {
    fontSize: moderateScale(12),
    color: Colors.bordercolor,
  },
  descriptionTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    marginTop: verticalScale(36),
    alignItems: 'center',
  },
  addButton: {
    width: '50%',
    borderRadius: 100,
    padding: verticalScale(18.5),
  },
  addButtonText: {
    color: Colors.white,
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },

  dropdown: {
    backgroundColor: Colors.white,
    height: verticalScale(56),
    borderColor: Colors.bordercolor,
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: horizontalScale(20),
  },

  placeholderStyle: {
    fontFamily: nunito.Regular,
    fontSize: moderateScale(16),
    color: Colors.bordercolor,
  },
  descriptionBox: {
    height: verticalScale(150),
    borderWidth: 1,
    borderRadius: 20,
    borderColor: Colors.bordercolor,
    paddingHorizontal: horizontalScale(24),
    paddingVertical: verticalScale(12),
    backgroundColor: Colors.white,
    fontSize: 16,
    fontFamily: nunito.SemiBold,
    color: Colors.darkGray,
  },

  selectedTextStyle: {
    fontSize: moderateScale(16),
    fontFamily: nunito.Regular,
  },

  errorText: {
    color: Colors.red,
    fontSize: moderateScale(10),
    marginTop: 4,
    fontFamily: nunito.Regular,
  },
  dropdownListContainer: {
    borderRadius: 10,
    paddingVertical: verticalScale(8),
    backgroundColor: Colors.white,
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },

  dropdownContainer: {
    borderRadius: 10,
    elevation: 5,
    backgroundColor: Colors.white,
    paddingVertical: verticalScale(10),
  },
  itemContainer: {
    paddingVertical: verticalScale(8),
    paddingHorizontal: horizontalScale(12),
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemLabel: {
    marginLeft: horizontalScale(10),
    fontSize: moderateScale(15),
    fontFamily: nunito.Regular,
  },
  checkboxImage: {
    width: horizontalScale(22),
    height: verticalScale(22),
  },
  slectedOptionsContainer: {
    borderWidth: 0,
    borderRadius: 6,
    backgroundColor: Colors.primary200,
    paddingHorizontal: horizontalScale(15),
  },
  selectedOptionText: {
    color: Colors.black,
    fontFamily: nunito.Regular,
    fontSize: moderateScale(14),
  },

  errorBorder: {
    borderColor: Colors.error,
  },
  carTypeError: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
