import { TestBed } from '@angular/core/testing';

import { TagRequestService } from '../../../serviceV2/tag-request.service';

describe('SearchTestService', () => {
  let service: TagRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TagRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
