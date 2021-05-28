import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day16PracticPractice5Component } from './day16-practic-practice5.component';

describe('Day16PracticPractice5Component', () => {
  let component: Day16PracticPractice5Component;
  let fixture: ComponentFixture<Day16PracticPractice5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day16PracticPractice5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day16PracticPractice5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
