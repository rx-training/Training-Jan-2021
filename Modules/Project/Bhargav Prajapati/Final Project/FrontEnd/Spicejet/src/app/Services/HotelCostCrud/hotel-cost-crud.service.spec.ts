import { TestBed } from '@angular/core/testing';

import { HotelCostCrudService } from './hotel-cost-crud.service';

describe('HotelCostCrudService', () => {
  let service: HotelCostCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelCostCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
