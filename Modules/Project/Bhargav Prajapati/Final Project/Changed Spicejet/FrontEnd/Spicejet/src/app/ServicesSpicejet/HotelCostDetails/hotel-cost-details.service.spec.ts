import { TestBed } from '@angular/core/testing';

import { HotelCostDetailsService } from './hotel-cost-details.service';

describe('HotelCostDetailsService', () => {
  let service: HotelCostDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelCostDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
