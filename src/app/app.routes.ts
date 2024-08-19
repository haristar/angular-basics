import { Routes } from '@angular/router';
import { EventComponent, ForComponent } from './app.component';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Home',
    component: EventComponent
  },
  {
    path: 'demo',
    title: 'Demo',
    component: ForComponent
  }
];
