import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6practice3Component } from './day6practice3.component';

describe('Day6practice3Component', () => {
  let component: Day6practice3Component;
  let fixture: ComponentFixture<Day6practice3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6practice3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6practice3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
