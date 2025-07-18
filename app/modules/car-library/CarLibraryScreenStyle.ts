// Define styles for the login screen component.

import { StyleSheet } from 'react-native';
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: verticalScale(12),
  },
  searchContainer: {
    flex: 1,
  },
  inputField: {
    marginBottom: 0,
    elevation: 1,
    shadowOpacity: 1,
    shadowColor: Colors.background,
    shadowOffset: { width: 5, height: 0 },
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
  icon: {
    height: moderateScale(24),
    width: moderateScale(24),
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
