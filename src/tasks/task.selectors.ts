import { createSelector } from '@ngrx/store';
import { TaskState } from './task.state';

// Select the entire tasks state
export const selectTaskState = (state: { tasks: TaskState }) => state.tasks;

// Select the list of tasks
export const selectTasks = createSelector(
  selectTaskState,
  (state: TaskState) => state.tasks
);

// Select only completed tasks
export const selectCompletedTasks = createSelector(selectTasks, (tasks) =>
  tasks.filter((task) => task.completed)
);

// Select only incomplete tasks
export const selectIncompleteTasks = createSelector(selectTasks, (tasks) =>
  tasks.filter((task) => !task.completed)
);
