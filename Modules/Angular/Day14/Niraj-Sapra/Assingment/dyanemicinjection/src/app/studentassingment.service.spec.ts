import { TestBed } from '@angular/core/testing';

import { StudentassingmentService } from './studentassingment.service';

describe('StudentassingmentService', () => {
  let service: StudentassingmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentassingmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
