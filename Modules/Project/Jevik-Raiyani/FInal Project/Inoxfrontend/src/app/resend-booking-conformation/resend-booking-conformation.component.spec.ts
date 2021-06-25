import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResendBookingConformationComponent } from './resend-booking-conformation.component';

describe('ResendBookingConformationComponent', () => {
  let component: ResendBookingConformationComponent;
  let fixture: ComponentFixture<ResendBookingConformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResendBookingConformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResendBookingConformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
