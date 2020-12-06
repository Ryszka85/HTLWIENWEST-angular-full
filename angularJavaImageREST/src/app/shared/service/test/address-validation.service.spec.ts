import { TestBed } from '@angular/core/testing';

import { AddressValidationService } from '../address-validation.service';

describe('AddressValidationService', () => {
  let service: AddressValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddressValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
