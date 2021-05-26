import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day19AssignmentAssignmentComponent } from './day19-assignment-assignment.component';

describe('Day19AssignmentAssignmentComponent', () => {
  let component: Day19AssignmentAssignmentComponent;
  let fixture: ComponentFixture<Day19AssignmentAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day19AssignmentAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day19AssignmentAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
