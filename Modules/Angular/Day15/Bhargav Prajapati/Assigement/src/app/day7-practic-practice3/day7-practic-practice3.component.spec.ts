import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day7PracticPractice3Component } from './day7-practic-practice3.component';

describe('Day7PracticPractice3Component', () => {
  let component: Day7PracticPractice3Component;
  let fixture: ComponentFixture<Day7PracticPractice3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day7PracticPractice3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day7PracticPractice3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
