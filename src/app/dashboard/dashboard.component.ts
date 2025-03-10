import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

// local imports
import { mockBlogs } from '../mock/blogs';
import { BlogCardComponent } from '../components/blog-card/blog-card.component';

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule, MatButtonModule, MatToolbarModule, BlogCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  blogs = signal(mockBlogs);

  constructor() {}
}
