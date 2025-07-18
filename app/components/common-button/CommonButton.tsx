import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, ImageSourcePropType, ViewStyle, TextStyle } from 'react-native';
import styles from './CommonButtonStyle'
interface IconButtonProps {
  icon?: ImageSourcePropType; // can be require(...) or { uri: '...' }
  text?: string;
  onPress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  backgroundColor?: string;
}

 const CommonButton: React.FC<IconButtonProps> = ({ icon, text, onPress, style, textStyle, backgroundColor }) => {
  return (
    <TouchableOpacity 
      style={[styles.iconContainer, style, backgroundColor ? { backgroundColor } : null]} 
      onPress={onPress}
    >
      {icon && <Image source={icon} style={styles.icon} resizeMode="contain" />}
      {text && <Text style={[styles.text, textStyle]}>{text}</Text>}
    </TouchableOpacity>
  );
};



export default CommonButton;
