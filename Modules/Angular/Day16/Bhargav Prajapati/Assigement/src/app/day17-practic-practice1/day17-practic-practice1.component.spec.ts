import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day17PracticPractice1Component } from './day17-practic-practice1.component';

describe('Day17PracticPractice1Component', () => {
  let component: Day17PracticPractice1Component;
  let fixture: ComponentFixture<Day17PracticPractice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day17PracticPractice1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day17PracticPractice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
