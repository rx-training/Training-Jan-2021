import { TestBed } from '@angular/core/testing';

import { MenServiceService } from './men-service.service';

describe('MenServiceService', () => {
  let service: MenServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
