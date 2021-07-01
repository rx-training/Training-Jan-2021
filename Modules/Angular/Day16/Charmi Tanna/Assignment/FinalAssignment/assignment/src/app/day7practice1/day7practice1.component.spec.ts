import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day7practice1Component } from './day7practice1.component';

describe('Day7practice1Component', () => {
  let component: Day7practice1Component;
  let fixture: ComponentFixture<Day7practice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day7practice1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day7practice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
