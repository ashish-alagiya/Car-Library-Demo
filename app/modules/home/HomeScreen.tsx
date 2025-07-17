import { View } from 'react-native';
import React from 'react';
import { ActivityLoader, AppText } from '../../components';
import useHomeScreen from './useHomeScreen';

const HomeScreen = () => {
  const { loading, cars, error } = useHomeScreen();
  return (
    <React.Fragment>
      <ActivityLoader isVisible={loading} />
      <View>
        <AppText>HomeScreen</AppText>
      </View>
    </React.Fragment>
  );
};

export default HomeScreen;
