import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day18AssignmentAssignmentComponent } from './day18-assignment-assignment.component';

describe('Day18AssignmentAssignmentComponent', () => {
  let component: Day18AssignmentAssignmentComponent;
  let fixture: ComponentFixture<Day18AssignmentAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day18AssignmentAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day18AssignmentAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
