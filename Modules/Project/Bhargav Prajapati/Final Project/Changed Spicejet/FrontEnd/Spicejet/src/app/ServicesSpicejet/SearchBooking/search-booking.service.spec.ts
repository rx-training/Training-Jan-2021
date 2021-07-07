import { TestBed } from '@angular/core/testing';

import { SearchBookingService } from './search-booking.service';

describe('SearchBookingService', () => {
  let service: SearchBookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchBookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
