import { Task } from './task.model';

// The state is where all the data for your feature is stored. In this case, the state will contain a list of tasks.
export interface TaskState {
  tasks: Task[]; // A list of tasks
}
