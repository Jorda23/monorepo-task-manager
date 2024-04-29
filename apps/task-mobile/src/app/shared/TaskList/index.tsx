import React from 'react';
import { View, Text, FlatList } from 'react-native';

import { useAppSelector } from '../../hook/store';
import { TaskItem } from '../../components/TaskItem';

const TaskList = () => {
  const tasks = useAppSelector((state) => state.tasks);

  return tasks.length === 0 ? (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>There are no tasks</Text>
    </View>
  ) : (
    <FlatList
      data={tasks}
      renderItem={TaskItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default TaskList;
