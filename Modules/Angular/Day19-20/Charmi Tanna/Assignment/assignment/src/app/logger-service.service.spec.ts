import { TestBed } from '@angular/core/testing';

import { LoggerServiceService } from './logger-service.service';

describe('LoggerServiceService', () => {
  let service: LoggerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
