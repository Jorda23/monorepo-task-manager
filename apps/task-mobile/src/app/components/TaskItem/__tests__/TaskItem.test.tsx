import React from 'react';
import { render } from '@testing-library/react-native';

import { TaskItem } from '..';
import { useTaskActions } from '../../../hook/useTaskActions';
import { PaperProvider } from 'react-native-paper';

jest.mock('../../../hook/useTaskActions', () => ({
  useTaskActions: jest.fn(),
}));

const mockUseTaskActions = useTaskActions as jest.MockedFunction<
  typeof useTaskActions
>;

describe('TaskItem', () => {
  beforeEach(() => {
    mockUseTaskActions.mockReturnValue({
      addTask: jest.fn(),
      removeTask: jest.fn(),
      setTaskIds: jest.fn(),
    });
  });

  it('renders correctly', () => {
    const task = { id: '1', name: 'Test Task' };
    const { getByText } = render(
      <PaperProvider>
        <TaskItem item={task} />
      </PaperProvider>
    );
    expect(getByText('Test Task')).toBeTruthy();
  });

  it('renders the TaskItem component', () => {
    const task = { id: '1', name: 'Test Task' };
    const { getByText } = render(
      <PaperProvider>
        <TaskItem item={task} />
      </PaperProvider>
    );
    expect(getByText('Test Task')).toBeTruthy();
  });
});
