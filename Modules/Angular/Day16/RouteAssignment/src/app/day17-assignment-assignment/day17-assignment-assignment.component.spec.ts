import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day17AssignmentAssignmentComponent } from './day17-assignment-assignment.component';

describe('Day17AssignmentAssignmentComponent', () => {
  let component: Day17AssignmentAssignmentComponent;
  let fixture: ComponentFixture<Day17AssignmentAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day17AssignmentAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day17AssignmentAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
