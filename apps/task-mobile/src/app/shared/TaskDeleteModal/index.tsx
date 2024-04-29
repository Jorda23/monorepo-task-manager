import React, { useState } from 'react';
import { View } from 'react-native';
import { Modal, Portal, Text } from 'react-native-paper';

import { Button } from '../../components/Button';
import { useTaskActions } from '../../hook/useTaskActions';
import { IconButton } from '../../components/IconButton';

interface Props {
  taskId: string;
}

export const TaskDeleteModal = ({ taskId }: Props) => {
  const { removeTask } = useTaskActions();
  const [onOpen, setOnOpen] = useState(false);

  const handleTaskDelete = () => {
    removeTask(taskId);
    setOnOpen(false);
  };

  return (
    <View style={{ height: 50, width: 40 }} testID="delete-modal">
      <IconButton iconName={'Cancel'} onPress={() => setOnOpen(true)} />
      <Portal>
        <Modal
          visible={onOpen}
          onDismiss={() => setOnOpen(false)}
          style={{ marginHorizontal: 10 }}
        >
          <View
            style={{ padding: 20, backgroundColor: 'white', borderRadius: 14 }}
          >
            <Text
              style={{ fontSize: 16, marginBottom: 10, textAlign: 'center' }}
            >
              Are you sure you want to delete this task?
            </Text>
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
                  label="Delete Task"
                  onPress={handleTaskDelete}
                  variant="tertiary"
                />
              </View>
              <View style={{ flex: 2 }}>
                <Button label="Cancel" onPress={() => setOnOpen(false)} />
              </View>
            </View>
          </View>
        </Modal>
      </Portal>
    </View>
  );
};
