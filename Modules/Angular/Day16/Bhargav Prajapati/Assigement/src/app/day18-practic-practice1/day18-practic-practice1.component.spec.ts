import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day18PracticPractice1Component } from './day18-practic-practice1.component';

describe('Day18PracticPractice1Component', () => {
  let component: Day18PracticPractice1Component;
  let fixture: ComponentFixture<Day18PracticPractice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day18PracticPractice1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day18PracticPractice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
