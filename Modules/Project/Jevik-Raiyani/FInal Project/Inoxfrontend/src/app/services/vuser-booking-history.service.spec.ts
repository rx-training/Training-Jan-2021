import { TestBed } from '@angular/core/testing';

import { VUserBookingHistoryService } from './vuser-booking-history.service';

describe('VUserBookingHistoryService', () => {
  let service: VUserBookingHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VUserBookingHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
