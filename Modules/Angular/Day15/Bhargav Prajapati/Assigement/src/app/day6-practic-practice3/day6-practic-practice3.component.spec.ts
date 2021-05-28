import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6PracticPractice3Component } from './day6-practic-practice3.component';

describe('Day6PracticPractice3Component', () => {
  let component: Day6PracticPractice3Component;
  let fixture: ComponentFixture<Day6PracticPractice3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6PracticPractice3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6PracticPractice3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
