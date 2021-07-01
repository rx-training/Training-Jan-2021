import { TestBed } from '@angular/core/testing';

import { AirplaneCrudService } from './airplane-crud.service';

describe('AirplaneCrudService', () => {
  let service: AirplaneCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirplaneCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
