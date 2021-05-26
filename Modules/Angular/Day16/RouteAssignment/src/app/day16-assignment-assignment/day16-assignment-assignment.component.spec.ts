import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day16AssignmentAssignmentComponent } from './day16-assignment-assignment.component';

describe('Day16AssignmentAssignmentComponent', () => {
  let component: Day16AssignmentAssignmentComponent;
  let fixture: ComponentFixture<Day16AssignmentAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day16AssignmentAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day16AssignmentAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
