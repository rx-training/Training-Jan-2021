import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5PracticePractice2Component } from './day5-practice-practice2.component';

describe('Day5PracticePractice2Component', () => {
  let component: Day5PracticePractice2Component;
  let fixture: ComponentFixture<Day5PracticePractice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day5PracticePractice2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day5PracticePractice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
