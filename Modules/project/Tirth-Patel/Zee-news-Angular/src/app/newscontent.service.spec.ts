import { TestBed } from '@angular/core/testing';

import { NewscontentService } from './newscontent.service';

describe('NewscontentService', () => {
  let service: NewscontentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewscontentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
