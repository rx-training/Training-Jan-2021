import { TestBed } from '@angular/core/testing';

import { HotelBookingServiceService } from './hotel-booking-service.service';

describe('HotelBookingServiceService', () => {
  let service: HotelBookingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelBookingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
