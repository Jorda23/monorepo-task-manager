import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, useTheme } from 'react-native-paper';

import { useGetElementsQuery } from '../../services/ElementList.services';
import { UserData } from '../../services/interface/ElementType';
import { CardItem } from '../../components/CardItem';
import Header from '../../components/Header';

export const TaskList = () => {
  const navigation = useNavigation();
  const { data: elements, error, isLoading } = useGetElementsQuery();

  const { colors } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: '#ffead7' }}>
      <Header
        label={'User List'}
        backgroundColor="#f88a71"
        handleNavigate={navigation.goBack}
      />

      {isLoading ? (
        <View
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ActivityIndicator
            animating={true}
            size={40}
            color={colors.primary}
          />
        </View>
      ) : elements?.length === 0 || error ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'black' }}>There are no elements</Text>
        </View>
      ) : (
        <FlatList
          data={elements}
          renderItem={({ item }: { item: UserData }) => (
            <CardItem
              createdAt={item.createdAt}
              name={item.name}
              srcImage={item.avatar}
              id={item.id}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};
