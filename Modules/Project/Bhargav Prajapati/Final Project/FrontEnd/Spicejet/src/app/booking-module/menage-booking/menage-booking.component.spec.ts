import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenageBookingComponent } from './menage-booking.component';

describe('MenageBookingComponent', () => {
  let component: MenageBookingComponent;
  let fixture: ComponentFixture<MenageBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenageBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenageBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
