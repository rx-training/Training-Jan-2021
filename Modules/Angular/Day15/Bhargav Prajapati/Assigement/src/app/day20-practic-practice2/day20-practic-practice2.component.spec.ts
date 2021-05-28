import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day20PracticPractice2Component } from './day20-practic-practice2.component';

describe('Day20PracticPractice2Component', () => {
  let component: Day20PracticPractice2Component;
  let fixture: ComponentFixture<Day20PracticPractice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day20PracticPractice2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day20PracticPractice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
