import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5Practice4Component } from './day5-practice4.component';

describe('Day5Practice4Component', () => {
  let component: Day5Practice4Component;
  let fixture: ComponentFixture<Day5Practice4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day5Practice4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day5Practice4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
