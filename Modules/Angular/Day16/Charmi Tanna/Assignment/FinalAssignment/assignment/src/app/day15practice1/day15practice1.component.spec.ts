import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day15practice1Component } from './day15practice1.component';

describe('Day15practice1Component', () => {
  let component: Day15practice1Component;
  let fixture: ComponentFixture<Day15practice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day15practice1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day15practice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
