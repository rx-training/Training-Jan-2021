import { TestBed } from '@angular/core/testing';

import { VDirectorCastService } from './vdirector-cast.service';

describe('VDirectorCastService', () => {
  let service: VDirectorCastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VDirectorCastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
