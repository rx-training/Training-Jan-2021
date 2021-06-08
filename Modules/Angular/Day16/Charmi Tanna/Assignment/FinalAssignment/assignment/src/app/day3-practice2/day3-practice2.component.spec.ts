import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3Practice2Component } from './day3-practice2.component';

describe('Day3Practice2Component', () => {
  let component: Day3Practice2Component;
  let fixture: ComponentFixture<Day3Practice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day3Practice2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day3Practice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
