import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day15prac2Component } from './day15prac2.component';

describe('Day15prac2Component', () => {
  let component: Day15prac2Component;
  let fixture: ComponentFixture<Day15prac2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day15prac2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day15prac2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
