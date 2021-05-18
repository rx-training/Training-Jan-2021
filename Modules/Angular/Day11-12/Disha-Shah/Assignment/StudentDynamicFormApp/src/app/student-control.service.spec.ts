import { TestBed } from '@angular/core/testing';

import { StudentControlService } from './student-control.service';

describe('StudentControlService', () => {
  let service: StudentControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
