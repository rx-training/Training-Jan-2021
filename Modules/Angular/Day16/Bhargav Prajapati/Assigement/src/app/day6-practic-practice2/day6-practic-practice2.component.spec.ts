import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6PracticPractice2Component } from './day6-practic-practice2.component';

describe('Day6PracticPractice2Component', () => {
  let component: Day6PracticPractice2Component;
  let fixture: ComponentFixture<Day6PracticPractice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6PracticPractice2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6PracticPractice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
