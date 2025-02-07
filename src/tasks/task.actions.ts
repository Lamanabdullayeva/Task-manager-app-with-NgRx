import { createAction, props } from '@ngrx/store';
import { Task } from './task.model';

// ngrx actions are simple objects that describe the type of action that occurred and any relevant data.
// The createAction function creates an action object with a type property that matches the action name.
export const addTask = createAction('[Task] Add Task', props<{ task: Task }>());
export const deleteTask = createAction(
  '[Task] Delete Task',
  props<{ id: string }>()
);
export const toggleTaskCompletion = createAction(
  '[Task] Toggle Task Completion',
  props<{ id: string }>()
);
