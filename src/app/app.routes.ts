import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TasksComponent } from '../tasks/tasks/tasks.component';

export const routes: Routes = [
  {
    path: '',
    component: TasksComponent,
  },
];
