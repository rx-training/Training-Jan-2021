import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4assignmentResumeComponent } from './day4assignment-resume.component';

describe('Day4assignmentResumeComponent', () => {
  let component: Day4assignmentResumeComponent;
  let fixture: ComponentFixture<Day4assignmentResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day4assignmentResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day4assignmentResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
