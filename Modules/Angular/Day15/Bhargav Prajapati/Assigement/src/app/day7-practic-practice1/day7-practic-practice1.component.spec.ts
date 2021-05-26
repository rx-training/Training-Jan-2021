import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day7PracticPractice1Component } from './day7-practic-practice1.component';

describe('Day7PracticPractice1Component', () => {
  let component: Day7PracticPractice1Component;
  let fixture: ComponentFixture<Day7PracticPractice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day7PracticPractice1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day7PracticPractice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
