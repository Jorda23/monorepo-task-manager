import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useAppSelector } from '../../hook/store';
import { TaskWithId } from '../../store/tasks/slice';
import { TaskDeleteModal } from '../TaskDeleteModal';

const TaskList = () => {
  const tasks = useAppSelector((state) => state.tasks);

  const renderItem = ({ item }: { item: TaskWithId }) => (
    <View style={styles.taskContainer}>
      <Text style={styles.taskText}>{item.name}</Text>
      <TaskDeleteModal taskId={item.id} />
    </View>
  );

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
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  taskText: {
    fontSize: 16,
  },
});

export default TaskList;
