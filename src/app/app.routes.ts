import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => {
      return import('./login/login.component').then((m) => m.LoginComponent);
    },
  },
  {
    path: 'blogs',
    loadComponent: () => {
      return import('./dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      );
    },
  },
  {
    path: 'blogs/create',
    loadComponent: () => {
      return import('./create/create.component').then((m) => m.CreateComponent);
    },
  },
  {
    path: 'blogs/:id',
    loadComponent: () => {
      return import('./blog/blog.component').then((m) => m.BlogComponent);
    },
  },
];
