import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day20AssignmentAssignmentComponent } from './day20-assignment-assignment.component';

describe('Day20AssignmentAssignmentComponent', () => {
  let component: Day20AssignmentAssignmentComponent;
  let fixture: ComponentFixture<Day20AssignmentAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day20AssignmentAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day20AssignmentAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
