import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6PracticPractice13Component } from './day6-practic-practice13.component';

describe('Day6PracticPractice13Component', () => {
  let component: Day6PracticPractice13Component;
  let fixture: ComponentFixture<Day6PracticPractice13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6PracticPractice13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6PracticPractice13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
