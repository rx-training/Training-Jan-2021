import { TestBed } from '@angular/core/testing';

import { BrandCategoryService } from './brand-category.service';

describe('BrandCategoryService', () => {
  let service: BrandCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrandCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
