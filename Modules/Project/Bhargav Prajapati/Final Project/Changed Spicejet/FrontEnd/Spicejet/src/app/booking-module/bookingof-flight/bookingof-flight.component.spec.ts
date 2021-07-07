import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingofFlightComponent } from './bookingof-flight.component';

describe('BookingofFlightComponent', () => {
  let component: BookingofFlightComponent;
  let fixture: ComponentFixture<BookingofFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingofFlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingofFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
