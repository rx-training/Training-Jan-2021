import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5Practice3Component } from './day5-practice3.component';

describe('Day5Practice3Component', () => {
  let component: Day5Practice3Component;
  let fixture: ComponentFixture<Day5Practice3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day5Practice3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day5Practice3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
