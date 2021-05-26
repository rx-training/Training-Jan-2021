import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6PracticPractice1Component } from './day6-practic-practice1.component';

describe('Day6PracticPractice1Component', () => {
  let component: Day6PracticPractice1Component;
  let fixture: ComponentFixture<Day6PracticPractice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6PracticPractice1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6PracticPractice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
