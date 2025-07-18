import { StyleSheet, View } from 'react-native';
import React from 'react';
import { AppText } from '../../components';
import { Colors } from '../../theme';

const ProfileScreen: React.FC = () => {
  return (
    <View style={styles.rootContainerStyle}>
      <AppText>ProfileScreen</AppText>
    </View>
  );
};

export default ProfileScreen;

export const styles = StyleSheet.create({
  rootContainerStyle: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
