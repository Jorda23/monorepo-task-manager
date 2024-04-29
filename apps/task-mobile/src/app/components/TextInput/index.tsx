import React, { useState } from 'react';
import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';
import { TextInput as TextInputPaper, useTheme } from 'react-native-paper';
import * as Icons from '../../../../assets/customIcons';

interface Props {
  value: string;
  placeholder: string;
  onChange?: (text: string) => void;
  onBlur?: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onFocus?: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  type: 'password' | 'email' | 'default';
  error: boolean | undefined;
  variant?: 'primary' | 'secondary';
  iconName?: Icons.IconName;
  keyboardType?: KeyboardTypeOptions;
  size?: 'sm' | 'md' | 'lg';
}

export const TextInput = (props: Props) => {
  const {
    onChange,
    onBlur,
    onFocus,
    value,
    placeholder,
    type,
    error,
    keyboardType = 'default',
    variant = 'primary',
    iconName,
    size = 'md',
  } = props;
  const { colors } = useTheme();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const SelectedIcon = iconName ? Icons[iconName] : null;

  return (
    <TextInputPaper
      testID="text-input-outlined" // Test ID for the entire TextInput component
      value={value}
      onChangeText={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      secureTextEntry={type === 'password' && !isPasswordVisible}
      placeholder={placeholder}
      keyboardType={keyboardType}
      right={
        type === 'password' ? (
          <TextInputPaper.Icon
            icon={isPasswordVisible ? 'eye-off' : 'eye'}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            style={{ marginTop: 15 }}
          />
        ) : SelectedIcon ? (
          <TextInputPaper.Icon
            icon={SelectedIcon}
            color="rgba(47, 178, 160, 1)"
          />
        ) : null
      }
      outlineStyle={{
        borderColor: error
          ? colors.primary
          : variant === 'secondary'
          ? 'rgba(211, 218, 227, 1)'
          : colors.onPrimaryContainer,
        borderRadius: 8,
        borderWidth: size === 'lg' ? 2 : 1,
      }}
      contentStyle={{
        height: size === 'lg' ? 60 : size === 'md' ? 50 : 40,
      }}
      mode="outlined"
      placeholderTextColor={'rgba(102, 102, 102, 1)'}
      style={{
        width: '100%',
        height: size === 'lg' ? 60 : size === 'md' ? 40 : 35,
        fontSize: size === 'lg' ? 19 : size === 'md' ? 17 : 14,
        backgroundColor: 'white',
      }}
    />
  );
};
