import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day7PracticePractice1Component } from './day7-practice-practice1.component';

describe('Day7PracticePractice1Component', () => {
  let component: Day7PracticePractice1Component;
  let fixture: ComponentFixture<Day7PracticePractice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day7PracticePractice1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day7PracticePractice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
