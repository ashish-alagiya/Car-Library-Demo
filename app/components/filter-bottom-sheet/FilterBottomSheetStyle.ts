import { StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';
import { nunito } from '../../assets';

export const styles = StyleSheet.create({
  filterHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(24),
    justifyContent: 'space-between',
  },
  filerTypeText: {
    fontWeight: 'bold',
    color: Colors.black,
    fontSize: moderateScale(14),
  },
  upImage: {
    width: verticalScale(15),
    height: verticalScale(15),
  },
  flatList: {
    marginTop: verticalScale(12),
  },
  contentContainerStyle: {
    gap: moderateScale(12),
  },
  bottomSheet: {
    padding: moderateScale(20),
  },
  filterText: {
    fontSize: moderateScale(24),
    fontFamily: nunito.Bold,
    marginBottom: verticalScale(20),
    color: Colors.black,
  },
  sectionHeader: {
    fontSize: moderateScale(14),
    fontFamily: nunito.Bold,
    marginVertical: verticalScale(8),
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: verticalScale(12),
  },
  bottomLine: {
    height: 1,
    backgroundColor: Colors.white,
    marginVertical: verticalScale(12),
  },
  horizontalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  arrowUpStyle: {
    height: moderateScale(14),
    width: moderateScale(14),
    tintColor: Colors.black,
  },
  applyBtn: {
    marginVertical: verticalScale(6),
    alignSelf: 'center',
    paddingHorizontal: horizontalScale(70),
    paddingVertical: verticalScale(16),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resetIconStyle: {
    height: moderateScale(15),
    width: moderateScale(15),
    marginEnd: horizontalScale(6),
  },
});
