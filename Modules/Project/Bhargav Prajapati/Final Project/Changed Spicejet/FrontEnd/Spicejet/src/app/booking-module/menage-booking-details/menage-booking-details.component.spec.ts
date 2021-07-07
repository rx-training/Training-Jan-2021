import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenageBookingDetailsComponent } from './menage-booking-details.component';

describe('MenageBookingDetailsComponent', () => {
  let component: MenageBookingDetailsComponent;
  let fixture: ComponentFixture<MenageBookingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenageBookingDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenageBookingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
