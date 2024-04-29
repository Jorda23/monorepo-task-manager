import React, { memo } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

import { ArrowLeft, Headset } from '../../../../assets/customIcons';
import { isMobileSmall } from '../../shared/screenUtils';

interface Props {
  backgroundColor?: string;
  handleNavigate?: () => void;
  handleHeadset?: () => void;
  label: string;
}

const Header = (props: Props) => {
  const {
    backgroundColor = 'transparent',
    handleNavigate,
    handleHeadset,
    label,
  } = props;

  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.leftContainer}>
        <TouchableOpacity
          onPress={handleNavigate}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <ArrowLeft
            color={colors.onPrimaryContainer}
            width={isMobileSmall ? 14 : 24}
            height={isMobileSmall ? 14 : 26}
          />

          <Text
            style={[
              styles.label,
              { width: '70%', fontSize: isMobileSmall ? 14 : 16 },
            ]}
            numberOfLines={1}
          >
            {label}
          </Text>
        </TouchableOpacity>
      </View>

      {/* <TouchableOpacity onPress={handleHeadset}>
        <Headset
          color={colors.onPrimaryContainer}
          width={isMobileSmall ? 24 : 35}
          height={isMobileSmall ? 24 : 35}
        />
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: isMobileSmall ? 15 : 20,
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
