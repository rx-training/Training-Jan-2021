import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day20Component } from './day20.component';

describe('Day20Component', () => {
  let component: Day20Component;
  let fixture: ComponentFixture<Day20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day20Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
