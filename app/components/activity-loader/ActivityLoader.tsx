import React, { memo } from 'react';
import { ActivityIndicator, Modal } from 'react-native';
import { Colors } from '../../theme';
import { styles } from './ActivityLoaderStyle';

const ActivityLoader = ({ isVisible, color }: { isVisible: boolean; color?: string }) => {
  return (
    <Modal transparent={true} visible={isVisible}>
      <ActivityIndicator style={styles.loader} size="large" color={color ?? Colors.primary} />
    </Modal>
  );
};

export default memo(ActivityLoader);
