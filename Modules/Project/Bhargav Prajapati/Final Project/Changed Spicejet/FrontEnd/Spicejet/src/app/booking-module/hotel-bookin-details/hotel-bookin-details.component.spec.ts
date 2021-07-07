import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelBookinDetailsComponent } from './hotel-bookin-details.component';

describe('HotelBookinDetailsComponent', () => {
  let component: HotelBookinDetailsComponent;
  let fixture: ComponentFixture<HotelBookinDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelBookinDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelBookinDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
