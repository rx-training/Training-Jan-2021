import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day17PracticPractice3Component } from './day17-practic-practice3.component';

describe('Day17PracticPractice3Component', () => {
  let component: Day17PracticPractice3Component;
  let fixture: ComponentFixture<Day17PracticPractice3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day17PracticPractice3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day17PracticPractice3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
