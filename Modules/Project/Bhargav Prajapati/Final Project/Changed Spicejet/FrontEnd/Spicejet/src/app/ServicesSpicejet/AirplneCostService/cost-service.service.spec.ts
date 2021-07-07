import { TestBed } from '@angular/core/testing';

import { CostServiceService } from './cost-service.service';

describe('CostServiceService', () => {
  let service: CostServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CostServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
