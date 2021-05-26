import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day7PracticPractice2Component } from './day7-practic-practice2.component';

describe('Day7PracticPractice2Component', () => {
  let component: Day7PracticPractice2Component;
  let fixture: ComponentFixture<Day7PracticPractice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day7PracticPractice2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day7PracticPractice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
