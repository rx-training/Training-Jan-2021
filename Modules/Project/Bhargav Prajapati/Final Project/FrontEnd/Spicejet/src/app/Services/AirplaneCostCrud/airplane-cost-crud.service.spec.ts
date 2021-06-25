import { TestBed } from '@angular/core/testing';

import { AirplaneCostCrudService } from './airplane-cost-crud.service';

describe('AirplaneCostCrudService', () => {
  let service: AirplaneCostCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirplaneCostCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
