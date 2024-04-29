import React from 'react'
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

import { TaskDeleteModal } from '../../shared/TaskDeleteModal';
import { TaskWithId } from '../../store/tasks/slice';


export const TaskItem = ({ item }: { item: TaskWithId }) => (
    <View style={styles.taskContainer}>
        <Text style={styles.taskText}>{item.name}</Text>
        <TaskDeleteModal taskId={item.id} />
    </View>
);

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
