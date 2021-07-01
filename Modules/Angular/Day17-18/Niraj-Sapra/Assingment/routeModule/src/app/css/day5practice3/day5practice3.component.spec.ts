import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5practice3Component } from './day5practice3.component';

describe('Day5practice3Component', () => {
  let component: Day5practice3Component;
  let fixture: ComponentFixture<Day5practice3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day5practice3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day5practice3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
