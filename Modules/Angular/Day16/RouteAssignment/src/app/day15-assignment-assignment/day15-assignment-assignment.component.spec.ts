import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day15AssignmentAssignmentComponent } from './day15-assignment-assignment.component';

describe('Day15AssignmentAssignmentComponent', () => {
  let component: Day15AssignmentAssignmentComponent;
  let fixture: ComponentFixture<Day15AssignmentAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day15AssignmentAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day15AssignmentAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
