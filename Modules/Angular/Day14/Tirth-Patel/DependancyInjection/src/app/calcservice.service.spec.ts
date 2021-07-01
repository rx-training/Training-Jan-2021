import { TestBed } from '@angular/core/testing';

import { CalcserviceService } from './calcservice.service';

describe('CalcserviceService', () => {
  let service: CalcserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
