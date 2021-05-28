import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day19PracticPractice2Component } from './day19-practic-practice2.component';

describe('Day19PracticPractice2Component', () => {
  let component: Day19PracticPractice2Component;
  let fixture: ComponentFixture<Day19PracticPractice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day19PracticPractice2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day19PracticPractice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
