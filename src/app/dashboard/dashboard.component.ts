import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule, MatButtonModule, MatCardModule, MatToolbarModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  blogs = signal([
    {
      id: 1,
      title: 'Blog 1',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo nulla ratione dolorem eos facilis id fugiat ipsam facere nam veritatis.',
    },
    {
      id: 2,
      title: 'Blog 2',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo nulla ratione dolorem eos facilis id fugiat ipsam facere nam veritatis.',
    },
    {
      id: 3,
      title: 'Blog 3',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo nulla ratione dolorem eos facilis id fugiat ipsam facere nam veritatis.',
    },
    {
      id: 4,
      title: 'Blog 4',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo nulla ratione dolorem eos facilis id fugiat ipsam facere nam veritatis.',
    },
    {
      id: 5,
      title: 'Blog 5',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo nulla ratione dolorem eos facilis id fugiat ipsam facere nam veritatis.',
    },
    {
      id: 6,
      title: 'Blog 6',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo nulla ratione dolorem eos facilis id fugiat ipsam facere nam veritatis.',
    },
    {
      id: 7,
      title: 'Blog 7',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo nulla ratione dolorem eos facilis id fugiat ipsam facere nam veritatis.',
    },
  ]);
}
