import { TestBed } from '@angular/core/testing';

import { RestorentService } from './restorent.service';

describe('RestorentService', () => {
  let service: RestorentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestorentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
