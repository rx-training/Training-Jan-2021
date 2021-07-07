import { TestBed } from '@angular/core/testing';

import { SearchFlightService } from './search-flight.service';

describe('SearchFlightService', () => {
  let service: SearchFlightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchFlightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
