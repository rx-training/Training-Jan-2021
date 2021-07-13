import { TestBed } from '@angular/core/testing';

import { PaymenttypeService } from './paymenttype.service';

describe('PaymenttypeService', () => {
  let service: PaymenttypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymenttypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
