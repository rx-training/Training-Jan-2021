import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6PracticPractice10Component } from './day6-practic-practice10.component';

describe('Day6PracticPractice10Component', () => {
  let component: Day6PracticPractice10Component;
  let fixture: ComponentFixture<Day6PracticPractice10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6PracticPractice10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6PracticPractice10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
