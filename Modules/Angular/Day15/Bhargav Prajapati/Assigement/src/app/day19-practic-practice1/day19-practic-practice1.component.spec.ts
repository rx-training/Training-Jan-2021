import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day19PracticPractice1Component } from './day19-practic-practice1.component';

describe('Day19PracticPractice1Component', () => {
  let component: Day19PracticPractice1Component;
  let fixture: ComponentFixture<Day19PracticPractice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day19PracticPractice1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day19PracticPractice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
