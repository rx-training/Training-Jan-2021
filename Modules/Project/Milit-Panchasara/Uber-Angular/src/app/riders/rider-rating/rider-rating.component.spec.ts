import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiderRatingComponent } from './rider-rating.component';

describe('RiderRatingComponent', () => {
  let component: RiderRatingComponent;
  let fixture: ComponentFixture<RiderRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiderRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiderRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
