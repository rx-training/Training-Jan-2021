import { TestBed } from '@angular/core/testing';

import { DynamicNavbarService } from './dynamic-navbar.service';

describe('DynamicNavbarService', () => {
  let service: DynamicNavbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicNavbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
