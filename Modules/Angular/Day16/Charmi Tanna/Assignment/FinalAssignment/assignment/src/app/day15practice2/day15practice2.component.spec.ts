import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day15practice2Component } from './day15practice2.component';

describe('Day15practice2Component', () => {
  let component: Day15practice2Component;
  let fixture: ComponentFixture<Day15practice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day15practice2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day15practice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
