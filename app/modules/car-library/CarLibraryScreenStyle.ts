// Define styles for the login screen component.

import { StyleSheet, ViewStyle } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: verticalScale(12),
    paddingHorizontal: horizontalScale(16),
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: moderateScale(25),
    backgroundColor: Colors.white,
    paddingHorizontal: horizontalScale(12),
    height: verticalScale(40),
  },
  searchContainerFocused: {
    flex: 1,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.primary100,
  },
  inputField: {
    flex: 1,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    margin: 0,
  },
  cancelButton: {
    marginLeft: horizontalScale(8),
    padding: moderateScale(8),
  },
  cancelButtonText: {
    color: Colors.error,
    fontSize: moderateScale(16),
    fontWeight: '500',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: horizontalScale(8),
  },
  actionButton: {
    marginLeft: horizontalScale(8),
  },
  searchInput: {
    flex: 1,
    padding: 0,
    margin: 0,
    marginLeft: horizontalScale(8),
    fontSize: moderateScale(16),
    color: Colors.black,
    height: '100%',
    fontFamily: 'Inter-Regular',
  },
  clearButton: {
    padding: moderateScale(8),
    marginLeft: horizontalScale(4),
    justifyContent: 'center',
    alignItems: 'center',
    width: moderateScale(24),
    height: moderateScale(24),
    borderRadius: moderateScale(12),
    backgroundColor: Colors.lightGray,
  },
  closeIcon: {
    width: moderateScale(10),
    height: moderateScale(10),
    tintColor: Colors.darkGray,
  },
  icon: {
    width: moderateScale(20),
    height: moderateScale(20),
    tintColor: Colors.darkGray,
  },

  loadingContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: horizontalScale(20),
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  retryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  newCarBtnContainer: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
  contentContainer: {
    paddingTop: moderateScale(4),
    paddingHorizontal: moderateScale(15),
    paddingBottom: moderateScale(20),
  },
});
