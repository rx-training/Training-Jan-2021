import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day16prac2Component } from './day16prac2.component';

describe('Day16prac2Component', () => {
  let component: Day16prac2Component;
  let fixture: ComponentFixture<Day16prac2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day16prac2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day16prac2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
