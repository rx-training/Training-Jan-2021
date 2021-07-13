import { TestBed } from '@angular/core/testing';

import { ProductdataService } from './productdata.service';

describe('ProductdataService', () => {
  let service: ProductdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
