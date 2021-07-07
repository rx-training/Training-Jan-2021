import { TestBed } from '@angular/core/testing';

import { SearchHotelServiceService } from './search-hotel-service.service';

describe('SearchHotelServiceService', () => {
  let service: SearchHotelServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchHotelServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
