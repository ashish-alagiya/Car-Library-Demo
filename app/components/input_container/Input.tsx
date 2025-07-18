import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
  KeyboardTypeOptions,
  Image,
} from 'react-native';
import { InputFieldProps } from '../../types';

import {styles} from './InputStyles'


export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChangeText,
  placeholder,
  isRequired = false,
  leftIcon,
  rightIcon,
  onLeftIconPress,
  onRightIconPress,
  showError = false,
  errorText,
  keyboardType = 'default',
  containerStyle,
  isDropdown = false,
  iconStyle,
  numberOfLines,
  multiline,
  onDropdownPress,
}) => {
  const hasError = isRequired && showError && value.trim() === '';

  return (
    <View style={[styles.wrapper, containerStyle]}>
      <View style={[styles.inputContainer, hasError && styles.errorBorder]}>
        {leftIcon && (
          <TouchableOpacity onPress={onLeftIconPress} style={styles.iconLeft}>
       <Image source={leftIcon} style={iconStyle} />
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={styles.inputTouchable}
          activeOpacity={isDropdown ? 0.8 : 1}
          onPress={isDropdown ? onDropdownPress : undefined}
        >
          <TextInput
            // style={styles.input}
            placeholder={placeholder}
            multiline={multiline}
            numberOfLines={numberOfLines}
         
            value={value}
            onChangeText={onChangeText}
            editable={!isDropdown}
            keyboardType={keyboardType}
            pointerEvents={isDropdown ? 'none' : 'auto'}
          />
        </TouchableOpacity>

        {rightIcon && (
          <TouchableOpacity onPress={onRightIconPress} style={styles.iconRight}>
           <Image source={rightIcon} style={iconStyle} resizeMode='contain' />
          </TouchableOpacity>
        )}
      </View>

      {hasError && (
        <Text style={styles.errorText}>{errorText || 'This field is required.'}</Text>
      )}
    </View>
  );
};

