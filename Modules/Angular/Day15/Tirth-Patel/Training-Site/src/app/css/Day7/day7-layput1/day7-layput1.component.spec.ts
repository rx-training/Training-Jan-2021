import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day7Layput1Component } from './day7-layput1.component';

describe('Day7Layput1Component', () => {
  let component: Day7Layput1Component;
  let fixture: ComponentFixture<Day7Layput1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day7Layput1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day7Layput1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
