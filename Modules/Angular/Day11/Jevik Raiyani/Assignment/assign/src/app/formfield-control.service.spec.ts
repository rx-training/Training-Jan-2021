import { TestBed } from '@angular/core/testing';

import { FormfieldControlService } from './formfield-control.service';

describe('FormfieldControlService', () => {
  let service: FormfieldControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormfieldControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
