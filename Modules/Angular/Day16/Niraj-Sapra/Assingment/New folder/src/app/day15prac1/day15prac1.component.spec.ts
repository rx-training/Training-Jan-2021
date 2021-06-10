import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day15prac1Component } from './day15prac1.component';

describe('Day15prac1Component', () => {
  let component: Day15prac1Component;
  let fixture: ComponentFixture<Day15prac1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day15prac1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day15prac1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
