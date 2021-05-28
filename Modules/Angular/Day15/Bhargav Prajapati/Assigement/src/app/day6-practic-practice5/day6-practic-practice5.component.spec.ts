import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6PracticPractice5Component } from './day6-practic-practice5.component';

describe('Day6PracticPractice5Component', () => {
  let component: Day6PracticPractice5Component;
  let fixture: ComponentFixture<Day6PracticPractice5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6PracticPractice5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6PracticPractice5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
