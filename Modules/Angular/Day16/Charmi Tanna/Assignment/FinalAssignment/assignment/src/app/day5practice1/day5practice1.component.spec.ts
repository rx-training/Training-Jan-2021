import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5practice1Component } from './day5practice1.component';

describe('Day5practice1Component', () => {
  let component: Day5practice1Component;
  let fixture: ComponentFixture<Day5practice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day5practice1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day5practice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
