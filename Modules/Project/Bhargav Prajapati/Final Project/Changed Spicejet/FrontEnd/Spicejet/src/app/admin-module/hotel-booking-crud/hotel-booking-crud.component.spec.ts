import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelBookingCrudComponent } from './hotel-booking-crud.component';

describe('HotelBookingCrudComponent', () => {
  let component: HotelBookingCrudComponent;
  let fixture: ComponentFixture<HotelBookingCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelBookingCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelBookingCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
