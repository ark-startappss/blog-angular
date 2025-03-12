import { Routes } from '@angular/router';

// local imports
import { checkLoginGuard } from './guard/check-login.guard';
import { checkGuestGuard } from './guard/check-guest.guard';
import { LayoutComponent } from './components/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    canActivate: [checkGuestGuard],
    loadComponent: () => {
      return import('./login/login.component').then((m) => m.LoginComponent);
    },
  },
  {
    path: '',
    canActivate: [checkLoginGuard],
    component: LayoutComponent,
    children: [
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
          return import('./create/create.component').then(
            (m) => m.CreateComponent
          );
        },
      },
    ],
  },
  {
    path: 'blogs/:id',
    loadComponent: () => {
      return import('./blog/blog.component').then((m) => m.BlogComponent);
    },
  },
];
