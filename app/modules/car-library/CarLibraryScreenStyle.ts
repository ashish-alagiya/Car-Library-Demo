// Define styles for the login screen component.

import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, verticalScale } from '../../theme';


export const styles = StyleSheet.create({
  container: {
    //flex: 1,
    paddingHorizontal: horizontalScale(24),
    backgroundColor: '#f5daf8ff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  searchContainer: {
    flex: 1,
  },
  inputField: {
   marginBottom:0,
   elevation:1,
   shadowOpacity:1,
   shadowColor:'#f5cef9ff',
 shadowOffset: { width: 5, height: 0 },
   
  },

  loadingContainer: {
 alignSelf:'center',
    justifyContent: 'center',
    alignItems: 'center',
   // backgroundColor: '#f5daf8ff',
  },
  errorContainer: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: horizontalScale(20),
   // backgroundColor: '#f5daf8ff',
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
    height:verticalScale(20),
    width:verticalScale(20)
  }
});