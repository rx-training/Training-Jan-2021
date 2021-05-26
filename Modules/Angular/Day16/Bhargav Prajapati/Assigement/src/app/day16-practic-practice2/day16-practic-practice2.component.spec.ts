import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day16PracticPractice2Component } from './day16-practic-practice2.component';

describe('Day16PracticPractice2Component', () => {
  let component: Day16PracticPractice2Component;
  let fixture: ComponentFixture<Day16PracticPractice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day16PracticPractice2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day16PracticPractice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
