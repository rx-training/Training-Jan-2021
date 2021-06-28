import { TestBed } from '@angular/core/testing';

import { Women999ServiceService } from './women999-service.service';

describe('Women999ServiceService', () => {
  let service: Women999ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Women999ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
