import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6practice7Component } from './day6practice7.component';

describe('Day6practice7Component', () => {
  let component: Day6practice7Component;
  let fixture: ComponentFixture<Day6practice7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6practice7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6practice7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
