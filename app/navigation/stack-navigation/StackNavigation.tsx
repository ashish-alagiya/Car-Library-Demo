import React from 'react';
import { Routes } from '../../constants';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

//! Below Imports Are Visualization of Custom Components UI */
import TabNavigation from '../tab-navigation/TabNavigation';
import { SafeAreaContainer } from '../../components';

const Stack = createStackNavigator();
export const AppStack = () => {
  const screenOption: StackNavigationOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator
      screenOptions={screenOption}
      initialRouteName={Routes.root}
    >
      {/* Define the screens to be included in the stack navigator */}
      <Stack.Screen name={Routes.root} component={TabNavigation} />
    </Stack.Navigator>
  );
};

const RootStack = () => {
  return (
    <SafeAreaContainer>
      <AppStack />
    </SafeAreaContainer>
  );
};

export default React.memo(RootStack);
