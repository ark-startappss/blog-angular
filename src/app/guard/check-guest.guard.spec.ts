import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { checkGuestGuard } from './check-guest.guard';

describe('checkGuestGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => checkGuestGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
