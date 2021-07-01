import { TestBed } from '@angular/core/testing';

import { HotelBookingCrudService } from './hotel-booking-crud.service';

describe('HotelBookingCrudService', () => {
  let service: HotelBookingCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelBookingCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
