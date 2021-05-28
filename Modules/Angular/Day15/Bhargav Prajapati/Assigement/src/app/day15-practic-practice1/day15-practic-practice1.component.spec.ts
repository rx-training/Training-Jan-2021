import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day15PracticPractice1Component } from './day15-practic-practice1.component';

describe('Day15PracticPractice1Component', () => {
  let component: Day15PracticPractice1Component;
  let fixture: ComponentFixture<Day15PracticPractice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day15PracticPractice1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day15PracticPractice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
