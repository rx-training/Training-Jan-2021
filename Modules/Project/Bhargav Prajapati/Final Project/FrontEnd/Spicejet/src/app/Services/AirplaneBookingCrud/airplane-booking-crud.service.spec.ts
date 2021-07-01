import { TestBed } from '@angular/core/testing';

import { AirplaneBookingCrudService } from './airplane-booking-crud.service';

describe('AirplaneBookingCrudService', () => {
  let service: AirplaneBookingCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirplaneBookingCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
