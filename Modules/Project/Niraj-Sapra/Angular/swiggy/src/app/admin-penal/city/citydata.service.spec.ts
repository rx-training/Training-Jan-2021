import { TestBed } from '@angular/core/testing';

import { CitydataService } from './citydata.service';

describe('CitydataService', () => {
  let service: CitydataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitydataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
