import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6PracticPractice11Component } from './day6-practic-practice11.component';

describe('Day6PracticPractice11Component', () => {
  let component: Day6PracticPractice11Component;
  let fixture: ComponentFixture<Day6PracticPractice11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6PracticPractice11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6PracticPractice11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
