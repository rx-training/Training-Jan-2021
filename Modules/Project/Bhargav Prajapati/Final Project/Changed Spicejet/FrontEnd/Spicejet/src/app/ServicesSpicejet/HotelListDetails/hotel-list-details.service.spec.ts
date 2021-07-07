import { TestBed } from '@angular/core/testing';

import { HotelListDetailsService } from './hotel-list-details.service';

describe('HotelListDetailsService', () => {
  let service: HotelListDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelListDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
