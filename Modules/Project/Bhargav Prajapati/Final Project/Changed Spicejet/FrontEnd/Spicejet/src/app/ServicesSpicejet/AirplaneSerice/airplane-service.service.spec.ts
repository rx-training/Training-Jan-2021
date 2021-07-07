import { TestBed } from '@angular/core/testing';

import { AirplaneServiceService } from './airplane-service.service';

describe('AirplaneServiceService', () => {
  let service: AirplaneServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirplaneServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
