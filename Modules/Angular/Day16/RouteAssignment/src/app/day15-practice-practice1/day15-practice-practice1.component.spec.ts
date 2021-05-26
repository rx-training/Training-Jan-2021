import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day15PracticePractice1Component } from './day15-practice-practice1.component';

describe('Day15PracticePractice1Component', () => {
  let component: Day15PracticePractice1Component;
  let fixture: ComponentFixture<Day15PracticePractice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day15PracticePractice1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day15PracticePractice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
