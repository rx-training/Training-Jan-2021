import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day15Practice2Component } from './day15-practice2.component';

describe('Day15Practice2Component', () => {
  let component: Day15Practice2Component;
  let fixture: ComponentFixture<Day15Practice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day15Practice2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day15Practice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
