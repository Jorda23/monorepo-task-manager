import React from 'react';
import { Button as ButtonPaper, useTheme } from 'react-native-paper';
import * as Icons from '../../../../assets/customIcons';

interface Props {
  label: string;
  onPress?: () => void;
  variant?:
    | 'primary'
    | 'onPrimary'
    | 'secondary'
    | 'outline'
    | 'outlineSecondary'
    | 'tertiary'
    | 'scarletGlow';
  iconPosition?: 'left' | 'right';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  iconName?: Icons.IconName;
  disabled?: boolean;
}

export const Button = (props: Props) => {
  const {
    label,
    onPress,
    variant = 'primary',
    size = 'md',
    iconPosition = 'left',
    iconName,
    loading,
    disabled = false,
  } = props;
  const { colors } = useTheme();

  const SelectedIcon = iconName ? Icons[iconName] : null;

  return (
    <ButtonPaper
      style={{
        backgroundColor: disabled
          ? '#cccccc'
          : variant === 'primary'
          ? colors.primary
          : variant === 'outline' || variant === 'outlineSecondary'
          ? 'white'
          : variant === 'tertiary'
          ? colors.onSecondary
          : variant === 'onPrimary'
          ? colors.onPrimary : variant === "scarletGlow" ? "rgba(201, 53, 46, 1)" :
          'white',
        width: '100%',
        borderRadius: 8,
        borderWidth:
        disabled ? 0 : variant === 'outline' || variant === 'outlineSecondary' || variant === "scarletGlow" ? 1 : 0,
        borderColor:
          variant === 'outline' ? colors.onPrimary : variant === "scarletGlow" ? "rgba(253, 179, 176, 1)" : colors.onSecondary,
      }}
      labelStyle={{
        color: disabled
          ? '#666666'
          : variant === 'primary' || variant === "scarletGlow" 
          ? 'white'
          : variant === 'tertiary' ||
            variant === 'outlineSecondary' ||
            variant === 'onPrimary'
          ? colors.onPrimaryContainer
          : colors.primary,
        fontSize: size === 'sm' ? 14 : 16,
      }}
      contentStyle={{
        height: size === 'lg' ? 60 : size === 'md' ? 50 : 40,
        flexDirection: iconPosition === 'left' ? 'row' : 'row-reverse',
        paddingHorizontal: 10,
      }}
      onPress={onPress}
      loading={loading}
      disabled={disabled}
      icon={
        !SelectedIcon
          ? ''
          : ({ size, color }) => (
              <SelectedIcon height={size} width={size} color={color} testID="button-icon" />
            )
      }
    >
      {label}
    </ButtonPaper>
  );
};
