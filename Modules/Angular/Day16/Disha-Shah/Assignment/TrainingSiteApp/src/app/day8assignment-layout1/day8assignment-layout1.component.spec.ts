import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day8assignmentLayout1Component } from './day8assignment-layout1.component';

describe('Day8assignmentLayout1Component', () => {
  let component: Day8assignmentLayout1Component;
  let fixture: ComponentFixture<Day8assignmentLayout1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day8assignmentLayout1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day8assignmentLayout1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
