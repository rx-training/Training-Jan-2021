import { TestBed } from '@angular/core/testing';

import { VCinemaScreenService } from './v-cinema-screen.service';

describe('VCinemaScreenService', () => {
  let service: VCinemaScreenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VCinemaScreenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
