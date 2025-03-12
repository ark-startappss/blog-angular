import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service'; // Adjust the import path as necessary
import { Router } from '@angular/router';

export const checkGuestGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const isLoggedIn = !!authService.accessToken;
  if (isLoggedIn) {
    router.navigateByUrl('/blogs'); // Redirect to home or any other page for logged-in users
  }
  return !isLoggedIn;
};
