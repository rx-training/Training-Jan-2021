import { TestBed } from '@angular/core/testing';

import { LoggedinguardService } from './loggedinguard.service';

describe('LoggedinguardService', () => {
  let service: LoggedinguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggedinguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
