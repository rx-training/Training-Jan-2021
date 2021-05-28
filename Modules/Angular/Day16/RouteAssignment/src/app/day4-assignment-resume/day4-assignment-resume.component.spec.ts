import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4AssignmentResumeComponent } from './day4-assignment-resume.component';

describe('Day4AssignmentResumeComponent', () => {
  let component: Day4AssignmentResumeComponent;
  let fixture: ComponentFixture<Day4AssignmentResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day4AssignmentResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day4AssignmentResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
