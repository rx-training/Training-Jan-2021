import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6practice1Component } from './day6practice1.component';

describe('Day6practice1Component', () => {
  let component: Day6practice1Component;
  let fixture: ComponentFixture<Day6practice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6practice1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6practice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
