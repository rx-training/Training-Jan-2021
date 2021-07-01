import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5practice2Component } from './day5practice2.component';

describe('Day5practice2Component', () => {
  let component: Day5practice2Component;
  let fixture: ComponentFixture<Day5practice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day5practice2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day5practice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
