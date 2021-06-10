import { TestBed } from '@angular/core/testing';

import { ProductDescriptionService } from './product-description.service';

describe('ProductDescriptionService', () => {
  let service: ProductDescriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductDescriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
