import { TestBed } from '@angular/core/testing';

import { LoggedInGuardServiceService } from './logged-in-guard-service.service';

describe('LoggedInGuardServiceService', () => {
  let service: LoggedInGuardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggedInGuardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
