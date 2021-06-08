import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day19practice1Component } from './day19practice1.component';

describe('Day19practice1Component', () => {
  let component: Day19practice1Component;
  let fixture: ComponentFixture<Day19practice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day19practice1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day19practice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
