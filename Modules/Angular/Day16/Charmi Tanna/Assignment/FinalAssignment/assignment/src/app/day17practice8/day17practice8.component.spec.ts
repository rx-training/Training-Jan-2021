import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day17practice8Component } from './day17practice8.component';

describe('Day17practice8Component', () => {
  let component: Day17practice8Component;
  let fixture: ComponentFixture<Day17practice8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day17practice8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day17practice8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
