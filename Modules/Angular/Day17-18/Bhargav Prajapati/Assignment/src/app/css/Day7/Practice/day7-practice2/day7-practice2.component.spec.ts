import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day7Practice2Component } from './day7-practice2.component';

describe('Day7Practice2Component', () => {
  let component: Day7Practice2Component;
  let fixture: ComponentFixture<Day7Practice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day7Practice2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day7Practice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
