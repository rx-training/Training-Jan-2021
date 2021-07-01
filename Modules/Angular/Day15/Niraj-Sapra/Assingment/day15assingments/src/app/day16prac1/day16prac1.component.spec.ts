import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day16prac1Component } from './day16prac1.component';

describe('Day16prac1Component', () => {
  let component: Day16prac1Component;
  let fixture: ComponentFixture<Day16prac1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day16prac1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day16prac1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
