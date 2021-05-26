import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day19PracticPractice4Component } from './day19-practic-practice4.component';

describe('Day19PracticPractice4Component', () => {
  let component: Day19PracticPractice4Component;
  let fixture: ComponentFixture<Day19PracticPractice4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day19PracticPractice4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day19PracticPractice4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
