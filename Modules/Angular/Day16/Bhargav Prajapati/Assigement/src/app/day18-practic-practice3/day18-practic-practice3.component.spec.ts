import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day18PracticPractice3Component } from './day18-practic-practice3.component';

describe('Day18PracticPractice3Component', () => {
  let component: Day18PracticPractice3Component;
  let fixture: ComponentFixture<Day18PracticPractice3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day18PracticPractice3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day18PracticPractice3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
