import { TestBed } from '@angular/core/testing';

import { HttpDemoService } from './http-demo.service';

describe('HttpDemoService', () => {
  let service: HttpDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
