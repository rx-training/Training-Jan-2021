import { TestBed } from '@angular/core/testing';

import { HotelbookingserviceService } from './hotelbookingservice.service';

describe('HotelbookingserviceService', () => {
  let service: HotelbookingserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelbookingserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
