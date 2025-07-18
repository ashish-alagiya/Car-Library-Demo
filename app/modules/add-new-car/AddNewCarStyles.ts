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
    backgroundColor: Colors.white,
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
    color: 'red',
  },
  input: {
    marginBottom: 0,
  },
  descriptionContainer: {
    height: 150, // more than InputField height
    padding: 10,
    backgroundColor: '#fff', // optional
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
  icon: { height: verticalScale(14), width: horizontalScale(18.9) },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },

  dropdown: {
    height: verticalScale(56),
    borderColor: Colors.bordercolor,
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: horizontalScale(20),
  },

  placeholderStyle: {
    fontSize: moderateScale(16),
    color: '#999',
  },

  selectedTextStyle: {
    fontSize: moderateScale(16),
  },

  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },

  errorText: {
    color: 'red',
    fontSize: moderateScale(10),
    marginTop: 4,
  },
  dropdownListContainer: {
    borderRadius: 10,
    paddingVertical: verticalScale(8),
    backgroundColor: '#f9f9f9',
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
    backgroundColor: '#e8d9fdff',
    paddingHorizontal: horizontalScale(15),
  },
  selectedOptionText: {
    color: Colors.black,
    fontFamily: nunito.Regular,
    fontSize: moderateScale(14),
  },
  placeholdertextcolor: { color: Colors.bordercolor },
  errorBorder: {
    borderColor: 'red',
  },
});
