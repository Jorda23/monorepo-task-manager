import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import moment from 'moment';

import { Avatar } from '../Avatar';

interface Props {
  createdAt: string;
  name: string;
  srcImage: string;
  id: string;
}

export const CardItem = (props: Props) => {
  const { createdAt, name, srcImage } = props;

  const formattedDate = moment(createdAt).format('LL'); 

  return (
    <View style={styles.item}>
      <Avatar size="small" source={{ uri: srcImage }} label={name} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{name}</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 16 }} variant="headlineMedium">
            created at:{' '}
          </Text>
          <Text>{formattedDate}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  textContainer: {
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
  },
});
