import React, { useEffect } from 'react';
import { Routes } from '../../constants';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

//! Below Imports Are Visualization of Custom Components UI */
import { HomeScreen } from '../../modules';

const Stack = createStackNavigator();
const RootStack = () => {
  const screenOption: StackNavigationOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator
      screenOptions={screenOption}
      initialRouteName={Routes.home}
    >
      {/* Define the screens to be included in the stack navigator */}
      <Stack.Screen name={Routes.home} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default React.memo(RootStack);
