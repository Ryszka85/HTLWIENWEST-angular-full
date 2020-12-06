import { TestBed } from '@angular/core/testing';

import { UpdateImageDetailsService } from '../update-image-details.service';

describe('UpdateImageDetailsService', () => {
  let service: UpdateImageDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateImageDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
