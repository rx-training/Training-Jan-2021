import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day18Practice1Component } from './day18-practice1.component';

describe('Day18Practice1Component', () => {
  let component: Day18Practice1Component;
  let fixture: ComponentFixture<Day18Practice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day18Practice1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day18Practice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
