import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

// local imports
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  authService = inject(AuthService);
  router = inject(Router);

  ngOnInit() {
    setTimeout(() => {
      if (!!this.authService.identityClaims) {
        this.router.navigateByUrl('/blogs');
      } else {
        this.router.navigateByUrl('/login');
      }
    }, 100);
  }
}
