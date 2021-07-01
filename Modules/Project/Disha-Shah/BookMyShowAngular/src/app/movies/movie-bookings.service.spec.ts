import { TestBed } from '@angular/core/testing';

import { MovieBookingsService } from './movie-bookings.service';

describe('MovieBookingsService', () => {
  let service: MovieBookingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieBookingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
