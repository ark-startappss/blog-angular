import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

// local imports
import { mockBlogs } from '../mock/blogs';
import { BlogCardComponent } from '../components/blog-card/blog-card.component';
import { NavbarComponent } from '../components/navbar/navbar.component';

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule, MatButtonModule, BlogCardComponent, NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  blogs = signal(mockBlogs);
}
