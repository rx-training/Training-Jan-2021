import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6PracticePractice14Component } from './day6-practice-practice14.component';

describe('Day6PracticePractice14Component', () => {
  let component: Day6PracticePractice14Component;
  let fixture: ComponentFixture<Day6PracticePractice14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6PracticePractice14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6PracticePractice14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
