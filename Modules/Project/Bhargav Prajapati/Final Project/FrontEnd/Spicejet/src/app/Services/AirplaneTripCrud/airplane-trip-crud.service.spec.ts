import { TestBed } from '@angular/core/testing';

import { AirplaneTripCrudService } from './airplane-trip-crud.service';

describe('AirplaneTripCrudService', () => {
  let service: AirplaneTripCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirplaneTripCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
