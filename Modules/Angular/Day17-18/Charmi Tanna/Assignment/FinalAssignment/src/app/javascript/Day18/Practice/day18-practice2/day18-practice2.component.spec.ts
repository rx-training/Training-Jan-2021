import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day18Practice2Component } from './day18-practice2.component';

describe('Day18Practice2Component', () => {
  let component: Day18Practice2Component;
  let fixture: ComponentFixture<Day18Practice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day18Practice2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day18Practice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
