import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6PracticPractice7Component } from './day6-practic-practice7.component';

describe('Day6PracticPractice7Component', () => {
  let component: Day6PracticPractice7Component;
  let fixture: ComponentFixture<Day6PracticPractice7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6PracticPractice7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6PracticPractice7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
