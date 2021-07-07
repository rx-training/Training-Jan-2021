import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusOfFlightComponent } from './status-of-flight.component';

describe('StatusOfFlightComponent', () => {
  let component: StatusOfFlightComponent;
  let fixture: ComponentFixture<StatusOfFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusOfFlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusOfFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
