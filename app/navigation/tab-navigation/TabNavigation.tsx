import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { ImageSourcePropType } from 'react-native';
import { Routes } from '../../constants';
import { Icons } from '../../assets';
import { styles } from './TabNavigationStyle';
import { CustomTabIcon } from '../../components';
import {
  CarLibrary,
  HomeScreen,
  ProfileScreen,
  ServicesScreen,
} from '../../modules';

const TabNav = createBottomTabNavigator();

const getTabBarOptions = (
  icon: ImageSourcePropType,
  label: string,
): BottomTabNavigationOptions => {
  const tabBarOptions: BottomTabNavigationOptions = {
    tabBarIcon: ({ focused }) => (
      <CustomTabIcon focused={focused} label={label} icon={icon} />
    ),
  };
  return tabBarOptions;
};

const TabNavigation = () => {
  const screenOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarStyle: styles.tabBarBackgroundStyle,
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
  };
  return (
    <TabNav.Navigator screenOptions={screenOptions}>
      <TabNav.Screen
        name={Routes.home}
        component={HomeScreen}
        options={getTabBarOptions(Icons.homeTab, Routes.home)}
      />
      <TabNav.Screen
        name={Routes.carLibrary}
        component={CarLibrary}
        options={getTabBarOptions(Icons.carLibraryTab, Routes.carLibrary)}
      />
      <TabNav.Screen
        name={Routes.services}
        component={ServicesScreen}
        options={getTabBarOptions(Icons.serviceTab, Routes.services)}
      />
      <TabNav.Screen
        name={Routes.profile}
        component={ProfileScreen}
        options={getTabBarOptions(Icons.profileTab, Routes.profile)}
      />
    </TabNav.Navigator>
  );
};
export default TabNavigation;
