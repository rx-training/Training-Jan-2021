import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirPlaneDetailsComponent } from './air-plane-details.component';

describe('AirPlaneDetailsComponent', () => {
  let component: AirPlaneDetailsComponent;
  let fixture: ComponentFixture<AirPlaneDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirPlaneDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirPlaneDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
