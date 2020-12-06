import { TestBed } from '@angular/core/testing';

import { CropAndDownloadResolverService } from '../crop-and-download-resolver.service';

describe('CropAndDownloadResolverService', () => {
  let service: CropAndDownloadResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CropAndDownloadResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
