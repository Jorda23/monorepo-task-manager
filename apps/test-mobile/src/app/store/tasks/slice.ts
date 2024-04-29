import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export type TaskId = string;

export interface Task {
  name: string;
}

export interface TaskWithId extends Task {
  id: TaskId;
}

const initialState: TaskWithId[] = [];

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addNewTask: (state, action: PayloadAction<Task>) => {
      const id = uuidv4();
      state.push({ id, ...action.payload });
    },
    deleteTaskById: (state, action: PayloadAction<TaskId>) => {
      const id = action.payload;
      return state.filter((task) => task.id !== id);
    },
    setTasks: (state, action: PayloadAction<TaskWithId[]>) => {
      return action.payload;
    },
  },
});

export default taskSlice.reducer;

export const { addNewTask, deleteTaskById, setTasks } = taskSlice.actions;
