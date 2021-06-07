import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiderTripListComponent } from './rider-trip-list.component';

describe('RiderTripListComponent', () => {
  let component: RiderTripListComponent;
  let fixture: ComponentFixture<RiderTripListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiderTripListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiderTripListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
