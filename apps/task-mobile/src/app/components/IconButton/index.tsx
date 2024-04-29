import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { useTheme } from 'react-native-paper';
import * as Icons from '../../../../assets/customIcons';

interface Props {
  iconName: Icons.IconName;
  onPress: () => void;
  size?: "sm" | "md";
}

export const IconButton = (props: Props) => {
  const { iconName, onPress, size } = props;

  const { colors } = useTheme();
  const SelectedIcon = Icons[iconName];

  return (
    <TouchableHighlight  onPress={onPress}>
      <View
        style={{
          position: 'absolute',
          backgroundColor: colors.secondary,
          alignSelf: 'center',
          borderRadius: 100,
          width: size === "sm" ? 40 : 50,
          height: size === "sm" ? 40 : 50,
          shadowColor: 'transparent',
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
        testID="icon-button" 
      >
        <SelectedIcon color={'white'} />
      </View>
    </TouchableHighlight>
  );
};
