import React, { memo, ReactNode } from 'react';
import { View, Platform, StatusBar, ViewStyle, ColorValue } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../theme';
import { styles } from './SafeAreaContainerStyle';

interface SafeAreaContainerProps {
  children: ReactNode;
  style?: ViewStyle;
  statusBarColor?: ColorValue;
}

const SafeAreaContainer: React.FC<SafeAreaContainerProps> = ({ children, style, statusBarColor }) => {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <View style={[styles.container, style]}>
        {Platform.OS === 'android' && (
          <StatusBar barStyle="dark-content" backgroundColor={statusBarColor ?? Colors.white} />
        )}
        {children}
      </View>
    </SafeAreaView>
  );
};
export default memo(SafeAreaContainer);
