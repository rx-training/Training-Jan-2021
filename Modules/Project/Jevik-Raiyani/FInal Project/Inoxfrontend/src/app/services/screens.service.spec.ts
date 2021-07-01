import { TestBed } from '@angular/core/testing';

import { ScreensService } from './screens.service';

describe('ScreensService', () => {
  let service: ScreensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
