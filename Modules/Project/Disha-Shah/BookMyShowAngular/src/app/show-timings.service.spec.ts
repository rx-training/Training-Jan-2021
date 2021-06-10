import { TestBed } from '@angular/core/testing';

import { ShowTimingsService } from './show-timings.service';

describe('ShowTimingsService', () => {
  let service: ShowTimingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowTimingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
