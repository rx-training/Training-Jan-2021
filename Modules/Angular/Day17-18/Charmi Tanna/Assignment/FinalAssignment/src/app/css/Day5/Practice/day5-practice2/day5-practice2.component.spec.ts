import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5Practice2Component } from './day5-practice2.component';

describe('Day5Practice2Component', () => {
  let component: Day5Practice2Component;
  let fixture: ComponentFixture<Day5Practice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day5Practice2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day5Practice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
