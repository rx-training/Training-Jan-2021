import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day7PracticePractice2Component } from './day7-practice-practice2.component';

describe('Day7PracticePractice2Component', () => {
  let component: Day7PracticePractice2Component;
  let fixture: ComponentFixture<Day7PracticePractice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day7PracticePractice2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day7PracticePractice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
