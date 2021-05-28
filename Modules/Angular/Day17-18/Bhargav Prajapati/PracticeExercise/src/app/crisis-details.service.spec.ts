import { TestBed } from '@angular/core/testing';

import { CrisisDetailsService } from './crisis-details.service';

describe('CrisisDetailsService', () => {
  let service: CrisisDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrisisDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
