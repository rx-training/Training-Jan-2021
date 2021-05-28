import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day17PracticPractice2Component } from './day17-practic-practice2.component';

describe('Day17PracticPractice2Component', () => {
  let component: Day17PracticPractice2Component;
  let fixture: ComponentFixture<Day17PracticPractice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day17PracticPractice2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day17PracticPractice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
