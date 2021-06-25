import { TestBed } from '@angular/core/testing';

import { HotelDetailsCrudService } from './hotel-details-crud.service';

describe('HotelDetailsCrudService', () => {
  let service: HotelDetailsCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelDetailsCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
