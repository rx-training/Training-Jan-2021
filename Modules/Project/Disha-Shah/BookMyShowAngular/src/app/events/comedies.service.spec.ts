import { TestBed } from '@angular/core/testing';

import { ComediesService } from './comedies.service';

describe('ComediesService', () => {
  let service: ComediesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComediesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
