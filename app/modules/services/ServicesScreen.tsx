import { StyleSheet, View } from 'react-native';
import React from 'react';
import { AppText } from '../../components';
import { Colors } from '../../theme';

const ServiceScreen: React.FC = () => {
  return (
    <View style={styles.rootContainerStyle}>
      <AppText>ServiceScreen</AppText>
    </View>
  );
};

export default ServiceScreen;

export const styles = StyleSheet.create({
  rootContainerStyle: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
