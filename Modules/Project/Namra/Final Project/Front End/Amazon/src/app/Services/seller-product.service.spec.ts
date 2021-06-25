import { TestBed } from '@angular/core/testing';

import { SellerProductService } from './seller-product.service';

describe('SellerProductService', () => {
  let service: SellerProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellerProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
