import { TestBed } from '@angular/core/testing';

import { WomenServiceService } from './women-service.service';

describe('WomenServiceService', () => {
  let service: WomenServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WomenServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
