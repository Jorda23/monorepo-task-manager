import { Task, TaskId, addNewTask, deleteTaskById, setTasks, TaskWithId } from '../store/tasks/slice';
import { useAppDispatch } from './store';

export const useTaskActions = () => {
  const dispatch = useAppDispatch();

  const addTask = ({ name }: Task) => {
    dispatch(addNewTask({ name }));
  };

  const removeTask = (id: TaskId) => {
    dispatch(deleteTaskById(id));
  };

  const setTaskIds = (taskWithId: TaskWithId[]) => {
    dispatch(setTasks(taskWithId));
  };

  return { addTask, removeTask, setTaskIds };
};
