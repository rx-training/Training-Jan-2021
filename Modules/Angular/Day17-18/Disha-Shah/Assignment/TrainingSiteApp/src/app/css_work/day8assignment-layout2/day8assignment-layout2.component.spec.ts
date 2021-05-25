import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day8assignmentLayout2Component } from './day8assignment-layout2.component';

describe('Day8assignmentLayout2Component', () => {
  let component: Day8assignmentLayout2Component;
  let fixture: ComponentFixture<Day8assignmentLayout2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day8assignmentLayout2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day8assignmentLayout2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
