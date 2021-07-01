import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5Practice1Component } from './day5-practice1.component';

describe('Day5Practice1Component', () => {
  let component: Day5Practice1Component;
  let fixture: ComponentFixture<Day5Practice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day5Practice1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day5Practice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
