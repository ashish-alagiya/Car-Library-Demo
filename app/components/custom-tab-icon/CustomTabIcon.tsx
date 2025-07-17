import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { FC, memo } from 'react';
import { styles } from './CustomTabIconStyle';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import AppText from '../app-text/AppText';
import { Colors } from '../../theme';

interface CustomTabIconType {
  focused: boolean;
  label: string;
  icon: ImageSourcePropType;
}

const CustomTabIcon: FC<CustomTabIconType> = ({ focused, label, icon }) => {
  const navigation = useNavigation<BottomTabNavigationProp<ParamListBase>>();
  const labelDynamicColor = {
    color: focused ? Colors.primary100 : Colors.white,
  };
  const dynamicIconTintColor = {
    tintColor: focused ? Colors.primary100 : Colors.white,
  };

  const changeTabHandle = (): void => {
    navigation.jumpTo(label);
  };

  return (
    <TouchableOpacity
      onPress={changeTabHandle}
      activeOpacity={1}
      style={styles.rootIconViewStyle}
    >
      <View style={styles.imageViewStyle}>
        <Image
          source={icon}
          style={StyleSheet.flatten([styles.imageStyle, dynamicIconTintColor])}
        />
      </View>
      <AppText
        adjustsFontSizeToFit
        numberOfLines={1}
        style={StyleSheet.flatten([(styles.labelStyle, labelDynamicColor)])}
      >
        {label}
      </AppText>
    </TouchableOpacity>
  );
};

export default memo(CustomTabIcon);
