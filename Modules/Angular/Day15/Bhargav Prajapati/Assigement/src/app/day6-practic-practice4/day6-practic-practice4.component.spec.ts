import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6PracticPractice4Component } from './day6-practic-practice4.component';

describe('Day6PracticPractice4Component', () => {
  let component: Day6PracticPractice4Component;
  let fixture: ComponentFixture<Day6PracticPractice4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6PracticPractice4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6PracticPractice4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
