import { TestBed } from '@angular/core/testing';

import { AuthSecurityGuard } from '../auth-security.guard';

describe('AuthSecurityGuard', () => {
  let guard: AuthSecurityGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthSecurityGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
