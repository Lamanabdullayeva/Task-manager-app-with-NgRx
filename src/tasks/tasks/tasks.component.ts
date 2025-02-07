import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTask, deleteTask, toggleTaskCompletion } from '../task.actions';
import { TaskState } from '../task.state';
import { CommonModule } from '@angular/common';
import { selectTasks } from '../task.selectors';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  tasks$;

  constructor(private store: Store<{ tasks: TaskState }>) {
    this.tasks$ = this.store.select(selectTasks);
  }

  addTask(title: string) {
    const task = { id: Date.now().toString(), title, completed: false };
    this.store.dispatch(addTask({ task }));
  }

  deleteTask(id: string) {
    this.store.dispatch(deleteTask({ id }));
  }

  toggleTaskCompletion(id: string) {
    this.store.dispatch(toggleTaskCompletion({ id }));
  }
}
