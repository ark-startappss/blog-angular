import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// local imports
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-layout',
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {}
