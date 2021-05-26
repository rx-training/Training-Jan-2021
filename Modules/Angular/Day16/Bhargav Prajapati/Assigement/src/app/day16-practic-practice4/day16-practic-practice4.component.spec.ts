import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day16PracticPractice4Component } from './day16-practic-practice4.component';

describe('Day16PracticPractice4Component', () => {
  let component: Day16PracticPractice4Component;
  let fixture: ComponentFixture<Day16PracticPractice4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day16PracticPractice4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day16PracticPractice4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
