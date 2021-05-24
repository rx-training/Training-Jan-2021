import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5assignmentLayoutComponent } from './day5assignment-layout.component';

describe('Day5assignmentLayoutComponent', () => {
  let component: Day5assignmentLayoutComponent;
  let fixture: ComponentFixture<Day5assignmentLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day5assignmentLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day5assignmentLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
