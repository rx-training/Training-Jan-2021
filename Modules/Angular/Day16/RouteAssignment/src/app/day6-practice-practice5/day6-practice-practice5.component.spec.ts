import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6PracticePractice5Component } from './day6-practice-practice5.component';

describe('Day6PracticePractice5Component', () => {
  let component: Day6PracticePractice5Component;
  let fixture: ComponentFixture<Day6PracticePractice5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6PracticePractice5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6PracticePractice5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
