import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day20PracticPractice1Component } from './day20-practic-practice1.component';

describe('Day20PracticPractice1Component', () => {
  let component: Day20PracticPractice1Component;
  let fixture: ComponentFixture<Day20PracticPractice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day20PracticPractice1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day20PracticPractice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
