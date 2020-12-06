import { TestBed } from '@angular/core/testing';

import { CookieAuthInterceptorService } from '../cookie-auth-interceptor.service';

describe('CookieAuthInterceptorService', () => {
  let service: CookieAuthInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CookieAuthInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
