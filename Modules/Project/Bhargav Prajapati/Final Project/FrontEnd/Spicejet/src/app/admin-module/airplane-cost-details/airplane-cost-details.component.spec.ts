import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirplaneCostDetailsComponent } from './airplane-cost-details.component';

describe('AirplaneCostDetailsComponent', () => {
  let component: AirplaneCostDetailsComponent;
  let fixture: ComponentFixture<AirplaneCostDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirplaneCostDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirplaneCostDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
