import { TestBed } from '@angular/core/testing';

import { Kids999ServiceService } from './kids999-service.service';

describe('Kids999ServiceService', () => {
  let service: Kids999ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kids999ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
