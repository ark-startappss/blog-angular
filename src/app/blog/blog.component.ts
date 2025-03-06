import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog',
  imports: [RouterModule, MatButtonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  title = 'Blog 1';
  content =
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum itaque, similique, a repellendus veniam sint magnam amet et voluptatibus, excepturi minima ad adipisci dolore? Nisi, suscipit. Quae nemo cupiditate minima ut beatae assumenda maxime laboriosam obcaecati necessitatibus. Aspernatur dolorum maiores, aut aliquam deserunt suscipit architecto porro ab possimus qui debitis?';
}
