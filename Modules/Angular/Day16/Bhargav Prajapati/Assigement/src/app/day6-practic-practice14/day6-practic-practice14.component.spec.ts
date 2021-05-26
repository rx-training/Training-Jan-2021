import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6PracticPractice14Component } from './day6-practic-practice14.component';

describe('Day6PracticPractice14Component', () => {
  let component: Day6PracticPractice14Component;
  let fixture: ComponentFixture<Day6PracticPractice14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6PracticPractice14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6PracticPractice14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
