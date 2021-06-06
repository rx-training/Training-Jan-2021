import { TestBed } from '@angular/core/testing';

import { EventBookingService } from './event-booking.service';

describe('EventBookingService', () => {
  let service: EventBookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventBookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
