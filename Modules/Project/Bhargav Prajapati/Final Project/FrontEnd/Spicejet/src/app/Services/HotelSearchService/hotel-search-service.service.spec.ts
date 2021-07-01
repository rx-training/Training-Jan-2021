import { TestBed } from '@angular/core/testing';

import { HotelSearchServiceService } from './hotel-search-service.service';

describe('HotelSearchServiceService', () => {
  let service: HotelSearchServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelSearchServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
