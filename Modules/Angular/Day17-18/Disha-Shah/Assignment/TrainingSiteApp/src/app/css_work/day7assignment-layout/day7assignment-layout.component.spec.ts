import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day7assignmentLayoutComponent } from './day7assignment-layout.component';

describe('Day7assignmentLayoutComponent', () => {
  let component: Day7assignmentLayoutComponent;
  let fixture: ComponentFixture<Day7assignmentLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day7assignmentLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day7assignmentLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
