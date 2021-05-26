import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day19PracticPractice6Component } from './day19-practic-practice6.component';

describe('Day19PracticPractice6Component', () => {
  let component: Day19PracticPractice6Component;
  let fixture: ComponentFixture<Day19PracticPractice6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day19PracticPractice6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day19PracticPractice6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
