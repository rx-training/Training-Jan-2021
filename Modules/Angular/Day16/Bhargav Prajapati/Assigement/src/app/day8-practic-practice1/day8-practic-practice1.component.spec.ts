import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day8PracticPractice1Component } from './day8-practic-practice1.component';

describe('Day8PracticPractice1Component', () => {
  let component: Day8PracticPractice1Component;
  let fixture: ComponentFixture<Day8PracticPractice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day8PracticPractice1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day8PracticPractice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
