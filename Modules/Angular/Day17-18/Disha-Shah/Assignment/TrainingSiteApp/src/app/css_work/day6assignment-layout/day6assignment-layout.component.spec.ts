import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6assignmentLayoutComponent } from './day6assignment-layout.component';

describe('Day6assignmentLayoutComponent', () => {
  let component: Day6assignmentLayoutComponent;
  let fixture: ComponentFixture<Day6assignmentLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6assignmentLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6assignmentLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
