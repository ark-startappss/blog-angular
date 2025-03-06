import { Routes } from '@angular/router';

// local imports
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlogComponent } from './blog/blog.component';
import { CreateComponent } from './create/create.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'blogs',
    component: DashboardComponent,
  },
  {
    path: 'blogs/create',
    component: CreateComponent,
  },
  {
    path: 'blogs/:id',
    component: BlogComponent,
  },
];
