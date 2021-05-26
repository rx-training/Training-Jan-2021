import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6PracticPractice8Component } from './day6-practic-practice8.component';

describe('Day6PracticPractice8Component', () => {
  let component: Day6PracticPractice8Component;
  let fixture: ComponentFixture<Day6PracticPractice8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6PracticPractice8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6PracticPractice8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
