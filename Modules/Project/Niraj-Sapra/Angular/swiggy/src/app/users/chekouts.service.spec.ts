import { TestBed } from '@angular/core/testing';

import { ChekoutsService } from './chekouts.service';

describe('ChekoutsService', () => {
  let service: ChekoutsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChekoutsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
