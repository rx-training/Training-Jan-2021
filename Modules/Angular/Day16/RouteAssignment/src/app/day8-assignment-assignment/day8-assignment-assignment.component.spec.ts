import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day8AssignmentAssignmentComponent } from './day8-assignment-assignment.component';

describe('Day8AssignmentAssignmentComponent', () => {
  let component: Day8AssignmentAssignmentComponent;
  let fixture: ComponentFixture<Day8AssignmentAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day8AssignmentAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day8AssignmentAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
