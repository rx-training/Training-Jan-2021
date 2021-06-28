import { TestBed } from '@angular/core/testing';

import { KidsServiceService } from './kids-service.service';

describe('KidsServiceService', () => {
  let service: KidsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KidsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
