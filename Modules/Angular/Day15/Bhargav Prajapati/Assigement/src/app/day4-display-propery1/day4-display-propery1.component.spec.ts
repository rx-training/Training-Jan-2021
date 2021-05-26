import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4DisplayPropery1Component } from './day4-display-propery1.component';

describe('Day4DisplayPropery1Component', () => {
  let component: Day4DisplayPropery1Component;
  let fixture: ComponentFixture<Day4DisplayPropery1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day4DisplayPropery1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day4DisplayPropery1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
