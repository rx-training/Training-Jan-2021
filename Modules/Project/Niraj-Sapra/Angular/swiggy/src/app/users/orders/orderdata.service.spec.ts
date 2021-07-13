import { TestBed } from '@angular/core/testing';

import { OrderdataService } from './orderdata.service';

describe('OrderdataService', () => {
  let service: OrderdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
