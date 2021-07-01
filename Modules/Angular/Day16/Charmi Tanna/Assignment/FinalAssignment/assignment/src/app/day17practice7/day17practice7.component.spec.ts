import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day17practice7Component } from './day17practice7.component';

describe('Day17practice7Component', () => {
  let component: Day17practice7Component;
  let fixture: ComponentFixture<Day17practice7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day17practice7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day17practice7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
