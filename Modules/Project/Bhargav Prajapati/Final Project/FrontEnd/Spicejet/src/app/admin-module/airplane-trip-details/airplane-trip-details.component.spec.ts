import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirplaneTripDetailsComponent } from './airplane-trip-details.component';

describe('AirplaneTripDetailsComponent', () => {
  let component: AirplaneTripDetailsComponent;
  let fixture: ComponentFixture<AirplaneTripDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirplaneTripDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirplaneTripDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
