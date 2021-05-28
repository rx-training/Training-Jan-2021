import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6PracticePractice6Component } from './day6-practice-practice6.component';

describe('Day6PracticePractice6Component', () => {
  let component: Day6PracticePractice6Component;
  let fixture: ComponentFixture<Day6PracticePractice6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6PracticePractice6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6PracticePractice6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
