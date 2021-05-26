import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6AssignmentAssignmentComponent } from './day6-assignment-assignment.component';

describe('Day6AssignmentAssignmentComponent', () => {
  let component: Day6AssignmentAssignmentComponent;
  let fixture: ComponentFixture<Day6AssignmentAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6AssignmentAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6AssignmentAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
