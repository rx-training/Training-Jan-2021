import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6PracticPractice12Component } from './day6-practic-practice12.component';

describe('Day6PracticPractice12Component', () => {
  let component: Day6PracticPractice12Component;
  let fixture: ComponentFixture<Day6PracticPractice12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6PracticPractice12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6PracticPractice12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
