import { TestBed } from '@angular/core/testing';

import { UserBookedFlightCrudService } from './user-booked-flight-crud.service';

describe('UserBookedFlightCrudService', () => {
  let service: UserBookedFlightCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserBookedFlightCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
