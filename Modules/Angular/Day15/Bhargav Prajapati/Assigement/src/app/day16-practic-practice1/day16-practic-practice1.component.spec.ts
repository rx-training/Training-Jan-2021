import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day16PracticPractice1Component } from './day16-practic-practice1.component';

describe('Day16PracticPractice1Component', () => {
  let component: Day16PracticPractice1Component;
  let fixture: ComponentFixture<Day16PracticPractice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day16PracticPractice1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day16PracticPractice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
