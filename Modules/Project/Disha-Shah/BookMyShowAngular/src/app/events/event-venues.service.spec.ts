import { TestBed } from '@angular/core/testing';

import { EventVenuesService } from './event-venues.service';

describe('EventVenuesService', () => {
  let service: EventVenuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventVenuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
