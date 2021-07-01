import { TestBed } from '@angular/core/testing';

import { ShowTimmeService } from './show-timme.service';

describe('ShowTimmeService', () => {
  let service: ShowTimmeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowTimmeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
