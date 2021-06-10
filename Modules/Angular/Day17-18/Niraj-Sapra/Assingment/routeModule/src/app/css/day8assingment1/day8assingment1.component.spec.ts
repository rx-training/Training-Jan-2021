import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day8assingment1Component } from './day8assingment1.component';

describe('Day8assingment1Component', () => {
  let component: Day8assingment1Component;
  let fixture: ComponentFixture<Day8assingment1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day8assingment1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day8assingment1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
