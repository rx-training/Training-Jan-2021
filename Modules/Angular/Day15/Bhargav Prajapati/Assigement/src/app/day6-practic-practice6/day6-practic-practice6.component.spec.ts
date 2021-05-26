import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6PracticPractice6Component } from './day6-practic-practice6.component';

describe('Day6PracticPractice6Component', () => {
  let component: Day6PracticPractice6Component;
  let fixture: ComponentFixture<Day6PracticPractice6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6PracticPractice6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6PracticPractice6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
