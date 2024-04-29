import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Modal } from 'react-native-paper';

import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';
import { useTaskActions } from '../../hook/useTaskActions';

interface Props {
  showModal: boolean;
  onClose: () => void;
}

export const TaskCreationModal = ({ showModal, onClose }: Props) => {
  const { addTask } = useTaskActions();
  const [taskName, setTaskName] = useState('');
  const [error, setError] = useState(Boolean);

  const handleAddTask = () => {
    if (!taskName.trim()) {
      setError(true);
      return;
    }
    addTask({ name: taskName.trim() });
    onClose();
    setTaskName('');
    setError(false);
  };

  const handleTaskNameChange = (text: string) => {
    setTaskName(text);
    if (text.trim()) setError(false);
  };

  return (
    <Modal
      visible={showModal}
      onDismiss={onClose}
      style={{ marginHorizontal: 10 }}
    >
      <View style={{ padding: 20, backgroundColor: 'white', borderRadius: 14 }}>
        <TextInput
          value={taskName}
          onChange={handleTaskNameChange}
          placeholder={'Enter the name of the task'}
          type={'default'}
          error={error}
        />
        {error && (
          <Text style={{ color: 'red', marginTop: 5 }}>
            Task name is require
          </Text>
        )}
        <View
          style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 20,
            gap: 20,
          }}
        >
          <View style={{ flex: 2 }}>
            <Button
              label="Create Task"
              onPress={handleAddTask}
              variant="tertiary"
            />
          </View>
          <View style={{ flex: 2 }}>
            <Button label="Cancel" onPress={onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
