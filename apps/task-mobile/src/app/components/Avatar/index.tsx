import React, { useState } from 'react';
import { View, Image, Text, ImageSourcePropType } from 'react-native';
import { useTheme } from 'react-native-paper';

interface Props {
  source?: ImageSourcePropType;
  label: string;
  size?: 'base' | 'extra_small' | 'small' | 'medium' | 'large';
  borderColor?: string;
  opacity?: number;
}

const sizeMapping: Record<string, number> = {
  base: 40,
  extra_small: 44,
  small: 60,
  medium: 100,
  large: 150,
};

export const Avatar = (props: Props) => {
  const { label, source, size, borderColor, opacity } = props;
  const [imageError, setImageError] = useState(false);

  const numericSize = size ? sizeMapping[size] : sizeMapping.base;
  const { colors } = useTheme();
  const fontSizeMapping: Record<string, number> = {
    base: 13,
    extra_small: 14,
    small: 18,
    medium: 24,
    large: 36,
  };
  const fontSize = size ? fontSizeMapping[size] : fontSizeMapping.medium;

  return (
    <View
      style={{
        backgroundColor: colors.onPrimary,
        borderColor: borderColor || 'transparent',
        borderWidth: borderColor ? 2 : 0,
        borderRadius: numericSize / 2,
        overflow: 'hidden',
        width: numericSize,
        height: numericSize,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: opacity || 1
      }}
      testID="avatar-view"
    >
      {!imageError && source ? (
        <Image
          testID="avatar-image"
          style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
          source={source}
          onError={() => setImageError(true)}
        />
      ) : (
        <Text
          style={{
            fontSize: fontSize,
            color: 'white',
          }}
        >
          {label.length >= 2
            ? label.substring(0, 2).toUpperCase()
            : label.toUpperCase()}
        </Text>
      )}
    </View>
  );
};
