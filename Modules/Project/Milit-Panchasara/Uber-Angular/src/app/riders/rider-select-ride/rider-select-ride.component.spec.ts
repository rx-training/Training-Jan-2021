import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiderSelectRideComponent } from './rider-select-ride.component';

describe('RiderSelectRideComponent', () => {
  let component: RiderSelectRideComponent;
  let fixture: ComponentFixture<RiderSelectRideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiderSelectRideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiderSelectRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
