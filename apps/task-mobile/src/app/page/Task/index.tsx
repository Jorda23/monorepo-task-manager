import React, { useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FAB, Portal } from 'react-native-paper';

import Header from '../../components/Header';
import TaskList from '../../shared/TaskList';
import { TaskCreationModal } from '../../shared/TaskCreationModal';

export const Task = () => {
  const navigation = useNavigation();
  const [state, setState] = useState({ open: false, showModal: false });

  const onStateChange = ({ open }) => setState((prev) => ({ ...prev, open }));

  const { open, showModal } = state;

  const handleAddTaskPress = () => {
    setState((prev) => ({ ...prev, showModal: true }));
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#ffead7' }}>
      <Header
        label={'Tasks'}
        backgroundColor="#f88a71"
        handleNavigate={navigation.goBack}
      />
      <TaskList />

      <Portal>
        <FAB.Group
          open={open}
          visible
          icon={open ? 'close' : 'plus'}
          actions={[
            { icon: 'file', label: 'Add task', onPress: handleAddTaskPress },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              console.log('Do something if the FAB is open');
            }
          }}
        />
      </Portal>

      <TaskCreationModal
          showModal={showModal}
          onClose={() => setState((prev) => ({ ...prev, showModal: false }))}
        />
    </View>
  );
};
