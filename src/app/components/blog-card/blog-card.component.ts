import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

// local imports
import { Blog } from '../../types/blog.type';

@Component({
  selector: 'app-blog-card',
  imports: [MatCardModule],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.css',
})
export class BlogCardComponent {
  blog = input.required<Blog>();
}
