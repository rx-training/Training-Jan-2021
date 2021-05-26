import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5PracticePractice1Component } from './day5-practice-practice1.component';

describe('Day5PracticePractice1Component', () => {
  let component: Day5PracticePractice1Component;
  let fixture: ComponentFixture<Day5PracticePractice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day5PracticePractice1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day5PracticePractice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
