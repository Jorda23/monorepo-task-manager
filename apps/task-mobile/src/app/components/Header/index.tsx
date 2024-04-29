import React, { memo } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

import { ArrowLeft } from '../../../../assets/customIcons';

interface Props {
  backgroundColor?: string;
  handleNavigate?: () => void;
  label: string;
}

const Header = (props: Props) => {
  const {
    backgroundColor = 'transparent',
    handleNavigate,
    label,
  } = props;

  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor }]} testID="header-view">
      <View style={styles.leftContainer}>
        <TouchableOpacity
          onPress={handleNavigate}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
          testID="header-button"
        >
          <ArrowLeft
            color={colors.onPrimaryContainer}
            width={24}
            height={26}
          />

          <Text
            style={[
              styles.label,
              { width: '70%', fontSize: 16 },
            ]}
            numberOfLines={1}
          >
            {label}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 999,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontWeight: '400',
    marginLeft: 10,
  },
});

export default memo(Header);
