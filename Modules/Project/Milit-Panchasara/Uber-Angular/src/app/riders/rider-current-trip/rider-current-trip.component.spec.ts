import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiderCurrentTripComponent } from './rider-current-trip.component';

describe('RiderCurrentTripComponent', () => {
  let component: RiderCurrentTripComponent;
  let fixture: ComponentFixture<RiderCurrentTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiderCurrentTripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiderCurrentTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
