import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day17PracticPractice4Component } from './day17-practic-practice4.component';

describe('Day17PracticPractice4Component', () => {
  let component: Day17PracticPractice4Component;
  let fixture: ComponentFixture<Day17PracticPractice4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day17PracticPractice4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day17PracticPractice4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
