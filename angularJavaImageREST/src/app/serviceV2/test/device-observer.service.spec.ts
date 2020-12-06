import { TestBed } from '@angular/core/testing';

import { DeviceObserverService } from '../device-observer.service';

describe('DeviceObserverService', () => {
  let service: DeviceObserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeviceObserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
