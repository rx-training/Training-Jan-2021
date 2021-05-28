import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day18AssignmentFinishExamComponent } from './day18-assignment-finish-exam.component';

describe('Day18AssignmentFinishExamComponent', () => {
  let component: Day18AssignmentFinishExamComponent;
  let fixture: ComponentFixture<Day18AssignmentFinishExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day18AssignmentFinishExamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day18AssignmentFinishExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
