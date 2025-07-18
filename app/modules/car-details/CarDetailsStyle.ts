import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: horizontalScale(24),
    paddingTop: verticalScale(16),
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 8,
  },
  closeButtonText: {
    fontSize: 24,
    color: '#999',
    fontWeight: '300',
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
    backgroundColor: '#4CAF50',
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(6),
    borderRadius: 16,
    alignSelf: 'flex-start',
    marginBottom: verticalScale(24),
  },
  transmissionText: {
    color: '#FFFFFF',
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
    color: '#000',
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: '#333333',
  },
  specsContainer: {
    marginTop: verticalScale(8),
  },
  specRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(8),
  },
  specPill: {
    backgroundColor: '#F0F0F0',
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(10),
    borderRadius: 24,
    marginBottom: verticalScale(8),
  },
  specText: {
    fontSize: 14,
    color: '#333',
  },
  lastUpdated: {
    fontSize: 12,
    color: '#666666',
    marginTop: verticalScale(8),
    marginBottom: verticalScale(24),
  },
});
