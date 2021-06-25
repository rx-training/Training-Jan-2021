import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirPlaneBookingDetailsComponent } from './air-plane-booking-details.component';

describe('AirPlaneBookingDetailsComponent', () => {
  let component: AirPlaneBookingDetailsComponent;
  let fixture: ComponentFixture<AirPlaneBookingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirPlaneBookingDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirPlaneBookingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
