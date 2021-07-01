import { TestBed } from '@angular/core/testing';

import { LoggerserviceService } from './loggerservice.service';

describe('LoggerserviceService', () => {
  let service: LoggerserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggerserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
