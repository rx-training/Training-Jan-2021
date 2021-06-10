import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day8assingment2Component } from './day8assingment2.component';

describe('Day8assingment2Component', () => {
  let component: Day8assingment2Component;
  let fixture: ComponentFixture<Day8assingment2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day8assingment2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day8assingment2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
