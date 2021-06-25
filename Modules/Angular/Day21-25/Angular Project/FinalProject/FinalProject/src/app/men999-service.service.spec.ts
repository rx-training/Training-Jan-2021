import { TestBed } from '@angular/core/testing';

import { Men999ServiceService } from './men999-service.service';

describe('Men999ServiceService', () => {
  let service: Men999ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Men999ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
