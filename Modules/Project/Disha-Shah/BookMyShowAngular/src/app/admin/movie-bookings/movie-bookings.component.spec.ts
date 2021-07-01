import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieBookingsComponent } from './movie-bookings.component';

describe('MovieBookingsComponent', () => {
  let component: MovieBookingsComponent;
  let fixture: ComponentFixture<MovieBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieBookingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
