import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const checkLoginGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const isLoggedIn = !!authService.accessToken;
  if (!isLoggedIn) {
    router.navigateByUrl('/login');
  }
  return isLoggedIn;
};
