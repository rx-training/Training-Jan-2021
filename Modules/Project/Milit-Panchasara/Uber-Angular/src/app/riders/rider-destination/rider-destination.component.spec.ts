import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiderDestinationComponent } from './rider-destination.component';

describe('RiderDestinationComponent', () => {
  let component: RiderDestinationComponent;
  let fixture: ComponentFixture<RiderDestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiderDestinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiderDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
