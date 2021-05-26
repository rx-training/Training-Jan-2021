import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day18PracticPractice2Component } from './day18-practic-practice2.component';

describe('Day18PracticPractice2Component', () => {
  let component: Day18PracticPractice2Component;
  let fixture: ComponentFixture<Day18PracticPractice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day18PracticPractice2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day18PracticPractice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
