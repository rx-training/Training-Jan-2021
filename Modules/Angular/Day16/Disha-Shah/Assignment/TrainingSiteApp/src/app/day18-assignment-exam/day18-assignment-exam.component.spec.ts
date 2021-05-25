import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day18AssignmentExamComponent } from './day18-assignment-exam.component';

describe('Day18AssignmentExamComponent', () => {
  let component: Day18AssignmentExamComponent;
  let fixture: ComponentFixture<Day18AssignmentExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day18AssignmentExamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day18AssignmentExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
