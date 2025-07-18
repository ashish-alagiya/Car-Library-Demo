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
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    paddingHorizontal: horizontalScale(24),
  },
  title: {
    fontSize: moderateScale(24),
    fontFamily: nunito.Bold,
    textAlign: 'center',
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
    color: Colors.error,
  },
  input: {
    marginBottom: 0,
  },
  descriptionContainer: {
    height: 150,
    padding: 10,
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
  },

  selectedTextStyle: {
    fontSize: moderateScale(16),
    fontFamily: nunito.Regular,
  },

  errorText: {
    color: Colors.error,
    fontSize: moderateScale(12),
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
    backgroundColor: Colors.background,
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
