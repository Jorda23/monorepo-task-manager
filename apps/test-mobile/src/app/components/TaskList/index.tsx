import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useAppSelector } from '../../hook/store';
import { TaskWithId } from '../../store/tasks/slice';

const TaskList = () => {
    const tasks = useAppSelector((state) => state.tasks);

 

  const renderItem = ({ item }:  { item: TaskWithId }) => (
    <View style={styles.taskContainer}>
      <Text style={styles.taskText}>{item.name}</Text>
      <TouchableOpacity >
        <Text style={styles.deleteButton}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={tasks}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  taskText: {
    fontSize: 16
  },
  deleteButton: {
    fontSize: 16,
    color: 'red'
  }
});

export default TaskList;
