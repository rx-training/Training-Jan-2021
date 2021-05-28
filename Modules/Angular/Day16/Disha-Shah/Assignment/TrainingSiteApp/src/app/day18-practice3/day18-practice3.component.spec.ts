import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day18Practice3Component } from './day18-practice3.component';

describe('Day18Practice3Component', () => {
  let component: Day18Practice3Component;
  let fixture: ComponentFixture<Day18Practice3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day18Practice3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day18Practice3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
