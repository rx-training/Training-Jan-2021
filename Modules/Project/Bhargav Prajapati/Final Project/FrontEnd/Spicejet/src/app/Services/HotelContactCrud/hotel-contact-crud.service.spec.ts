import { TestBed } from '@angular/core/testing';

import { HotelContactCrudService } from './hotel-contact-crud.service';

describe('HotelContactCrudService', () => {
  let service: HotelContactCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelContactCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
