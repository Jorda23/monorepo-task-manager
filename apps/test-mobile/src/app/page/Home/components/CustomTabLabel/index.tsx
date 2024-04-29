import React from 'react';
import { View } from 'react-native';
import { useTheme, Text } from 'react-native-paper';  
import { isMobileSmall } from '../../../../../../shared/screenUtils';

interface Props {
    label: string;
    isFocused: boolean;
}

export const CustomTabLabel = (props:Props) => {
  const { colors } = useTheme();
  const { label, isFocused } = props;
  
  return (
    <View style={{ alignItems: 'center' }}>
      <Text
        style={{
          fontSize: isMobileSmall ? 10 : 11,
          color: isFocused ? colors.primary : 'rgba(3, 29, 68, 0.5)',
          marginBottom: 5,
        }}
      >
        {label}
      </Text>
      {isFocused && (
        <View
          style={{
            height: 2,
            backgroundColor: 'rgba(253, 179, 176, 1)',
            width: isMobileSmall ? 25 : 30,
          }}
        />
      )}
    </View>
  );
};
