import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day16prac3Component } from './day16prac3.component';

describe('Day16prac3Component', () => {
  let component: Day16prac3Component;
  let fixture: ComponentFixture<Day16prac3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day16prac3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day16prac3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
