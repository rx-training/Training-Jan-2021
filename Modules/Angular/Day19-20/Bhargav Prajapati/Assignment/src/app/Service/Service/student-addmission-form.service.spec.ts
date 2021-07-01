import { TestBed } from '@angular/core/testing';

import { StudentAddmissionFormService } from './student-addmission-form.service';

describe('StudentAddmissionFormService', () => {
  let service: StudentAddmissionFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentAddmissionFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
