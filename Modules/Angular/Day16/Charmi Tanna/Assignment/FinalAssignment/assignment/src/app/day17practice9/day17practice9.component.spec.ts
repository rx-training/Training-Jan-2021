import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day17practice9Component } from './day17practice9.component';

describe('Day17practice9Component', () => {
  let component: Day17practice9Component;
  let fixture: ComponentFixture<Day17practice9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day17practice9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day17practice9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
