import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day7AssignmentAssignmentComponent } from './day7-assignment-assignment.component';

describe('Day7AssignmentAssignmentComponent', () => {
  let component: Day7AssignmentAssignmentComponent;
  let fixture: ComponentFixture<Day7AssignmentAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day7AssignmentAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day7AssignmentAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
