import { TestBed } from '@angular/core/testing';

import { RiderGuard } from './rider.guard';

describe('RiderGuard', () => {
  let guard: RiderGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RiderGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
