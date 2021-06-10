import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6prac2Component } from './day6prac2.component';

describe('Day6prac2Component', () => {
  let component: Day6prac2Component;
  let fixture: ComponentFixture<Day6prac2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6prac2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6prac2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
