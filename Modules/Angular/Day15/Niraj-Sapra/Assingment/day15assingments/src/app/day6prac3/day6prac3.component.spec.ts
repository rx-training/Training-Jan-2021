import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6prac3Component } from './day6prac3.component';

describe('Day6prac3Component', () => {
  let component: Day6prac3Component;
  let fixture: ComponentFixture<Day6prac3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6prac3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6prac3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
