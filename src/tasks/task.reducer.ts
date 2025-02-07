import { createReducer, on } from '@ngrx/store';
import { TaskState } from './task.state';
import { addTask, deleteTask, toggleTaskCompletion } from './task.actions';

export const initialState: TaskState = {
  tasks: [],
};

// A reducer is a function that takes the current state and an action, and returns a new state. It’s responsible for handling state changes.

export const taskReducer = createReducer(
  initialState,
  on(addTask, (state, { task }) => ({
    ...state,
    tasks: [...state.tasks, task],
  })),
  on(deleteTask, (state, { id }) => ({
    ...state,
    tasks: state.tasks.filter((task) => task.id !== id),
  })),
  on(toggleTaskCompletion, (state, { id }) => ({
    ...state,
    tasks: state.tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ),
  }))
);
