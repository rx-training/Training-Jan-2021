import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6prac1Component } from './day6prac1.component';

describe('Day6prac1Component', () => {
  let component: Day6prac1Component;
  let fixture: ComponentFixture<Day6prac1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6prac1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6prac1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
