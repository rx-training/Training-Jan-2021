import { TestBed } from '@angular/core/testing';

import { QuestionControlServiceService } from './question-control-service.service';

describe('QuestionControlServiceService', () => {
  let service: QuestionControlServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionControlServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
