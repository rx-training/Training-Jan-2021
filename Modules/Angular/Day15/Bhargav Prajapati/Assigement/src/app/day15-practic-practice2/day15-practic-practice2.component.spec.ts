import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day15PracticPractice2Component } from './day15-practic-practice2.component';

describe('Day15PracticPractice2Component', () => {
  let component: Day15PracticPractice2Component;
  let fixture: ComponentFixture<Day15PracticPractice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day15PracticPractice2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day15PracticPractice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
