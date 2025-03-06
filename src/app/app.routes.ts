import { Routes } from '@angular/router';

// local imports
import { LoginComponent } from './login/login.component';
import { BlogsComponent } from './blogs/blogs.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'blogs', component: BlogsComponent },
];
