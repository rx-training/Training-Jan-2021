import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6PracticPractice9Component } from './day6-practic-practice9.component';

describe('Day6PracticPractice9Component', () => {
  let component: Day6PracticPractice9Component;
  let fixture: ComponentFixture<Day6PracticPractice9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6PracticPractice9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6PracticPractice9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
