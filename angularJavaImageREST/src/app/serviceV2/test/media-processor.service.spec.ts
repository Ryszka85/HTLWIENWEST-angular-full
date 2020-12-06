import { TestBed } from '@angular/core/testing';

import { MediaProcessorService } from '../media-processor.service';

describe('MediaProcessorService', () => {
  let service: MediaProcessorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaProcessorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
