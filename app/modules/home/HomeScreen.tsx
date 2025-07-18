import { StyleSheet, View } from 'react-native';
import React from 'react';
import { AppText } from '../../components';
import { Colors } from '../../theme';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.rootContainerStyle}>
      <AppText>Home Screen</AppText>
    </View>
  );
};

export default HomeScreen;

export const styles = StyleSheet.create({
  rootContainerStyle: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
