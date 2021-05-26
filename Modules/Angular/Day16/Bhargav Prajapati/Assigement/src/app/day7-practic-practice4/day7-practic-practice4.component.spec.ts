import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day7PracticPractice4Component } from './day7-practic-practice4.component';

describe('Day7PracticPractice4Component', () => {
  let component: Day7PracticPractice4Component;
  let fixture: ComponentFixture<Day7PracticPractice4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day7PracticPractice4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day7PracticPractice4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
