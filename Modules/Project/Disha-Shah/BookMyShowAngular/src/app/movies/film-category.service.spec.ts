import { TestBed } from '@angular/core/testing';

import { FilmCategoryService } from './film-category.service';

describe('FilmCategoryService', () => {
  let service: FilmCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
