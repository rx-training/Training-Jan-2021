import { TestBed } from '@angular/core/testing';

import { VSeatService } from './vseat.service';

describe('VSeatService', () => {
  let service: VSeatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VSeatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
