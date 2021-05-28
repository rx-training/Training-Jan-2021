import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day16PracticPractice3Component } from './day16-practic-practice3.component';

describe('Day16PracticPractice3Component', () => {
  let component: Day16PracticPractice3Component;
  let fixture: ComponentFixture<Day16PracticPractice3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day16PracticPractice3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day16PracticPractice3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
