import { TestBed } from '@angular/core/testing';

import { SearchByUsersState } from '../shared/app-state/states/search-by-users.state';

describe('UserServiceService', () => {
  let service: SearchByUsersState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchByUsersState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
