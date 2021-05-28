import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5AssignmentAssignmentComponent } from './day5-assignment-assignment.component';

describe('Day5AssignmentAssignmentComponent', () => {
  let component: Day5AssignmentAssignmentComponent;
  let fixture: ComponentFixture<Day5AssignmentAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day5AssignmentAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day5AssignmentAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
