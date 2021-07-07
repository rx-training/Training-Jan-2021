import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHotelBookingComponent } from './search-hotel-booking.component';

describe('SearchHotelBookingComponent', () => {
  let component: SearchHotelBookingComponent;
  let fixture: ComponentFixture<SearchHotelBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchHotelBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchHotelBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
