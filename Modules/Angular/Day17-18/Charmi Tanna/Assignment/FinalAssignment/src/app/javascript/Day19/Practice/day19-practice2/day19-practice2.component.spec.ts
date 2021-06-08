import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day19Practice2Component } from './day19-practice2.component';

describe('Day19Practice2Component', () => {
  let component: Day19Practice2Component;
  let fixture: ComponentFixture<Day19Practice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day19Practice2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day19Practice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
