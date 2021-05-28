import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3PracticeStudentReportCardComponent } from './day3-practice-student-report-card.component';

describe('Day3PracticeStudentReportCardComponent', () => {
  let component: Day3PracticeStudentReportCardComponent;
  let fixture: ComponentFixture<Day3PracticeStudentReportCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day3PracticeStudentReportCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day3PracticeStudentReportCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
