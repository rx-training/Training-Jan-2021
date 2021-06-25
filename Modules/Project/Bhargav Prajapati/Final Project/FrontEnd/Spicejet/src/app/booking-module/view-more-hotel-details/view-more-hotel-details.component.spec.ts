import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMoreHotelDetailsComponent } from './view-more-hotel-details.component';

describe('ViewMoreHotelDetailsComponent', () => {
  let component: ViewMoreHotelDetailsComponent;
  let fixture: ComponentFixture<ViewMoreHotelDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMoreHotelDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMoreHotelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
