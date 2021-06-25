import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelDetailsCrudComponent } from './hotel-details-crud.component';

describe('HotelDetailsCrudComponent', () => {
  let component: HotelDetailsCrudComponent;
  let fixture: ComponentFixture<HotelDetailsCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelDetailsCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelDetailsCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
