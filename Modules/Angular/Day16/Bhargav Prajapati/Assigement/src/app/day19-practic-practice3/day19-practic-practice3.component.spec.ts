import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day19PracticPractice3Component } from './day19-practic-practice3.component';

describe('Day19PracticPractice3Component', () => {
  let component: Day19PracticPractice3Component;
  let fixture: ComponentFixture<Day19PracticPractice3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day19PracticPractice3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day19PracticPractice3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
