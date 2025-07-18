import { Platform, StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: horizontalScale(24),
    paddingTop:
      Platform.OS === 'android' ? verticalScale(50) : verticalScale(70),
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: moderateScale(10),
  },
  closeButton: {
    padding: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: verticalScale(16),
  },
  carImage: {
    width: '100%',
    height: verticalScale(210),
    borderRadius: 12,
    marginBottom: verticalScale(16),
  },
  transmissionBadge: {
    backgroundColor: Colors.manualText,
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(6),
    borderRadius: 16,
    alignSelf: 'flex-start',
    marginBottom: verticalScale(24),
  },
  transmissionText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: '500',
  },
  section: {
    marginBottom: verticalScale(24),
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: verticalScale(8),
    color: Colors.black,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: Colors.black,
  },
  lastUpdated: {
    fontSize: 12,
    color: Colors.gray,
    marginTop: verticalScale(8),
    marginBottom: verticalScale(24),
  },
  devider: {
    borderBottomWidth: 1,
    borderColor: Colors.bordercolor,
    marginBottom: verticalScale(18),
  },
  text: {
    fontSize: 14,
    color: Colors.black,
  },
  specificationBox: {
    borderWidth: 1,
    margin: moderateScale(12),
    borderRadius: moderateScale(6),
    borderColor: Colors.primary100,
    paddingVertical: verticalScale(8),
    paddingHorizontal: horizontalScale(14),
  },
  specificationView: {
    flexDirection: 'row',
  },
  deleteIconView: {
    alignItems: 'center',
    marginBottom: verticalScale(25),
  },
  deleteIcon: {
    height: verticalScale(30),
    width: verticalScale(30),
  },
  closeIcon: {
    height: verticalScale(20),
    width: verticalScale(20),
  },
});
