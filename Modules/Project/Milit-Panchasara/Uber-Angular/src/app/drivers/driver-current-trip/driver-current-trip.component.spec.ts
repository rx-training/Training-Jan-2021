import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverCurrentTripComponent } from './driver-current-trip.component';

describe('DriverCurrentTripComponent', () => {
  let component: DriverCurrentTripComponent;
  let fixture: ComponentFixture<DriverCurrentTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverCurrentTripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverCurrentTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
