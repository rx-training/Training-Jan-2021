import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4PracticeStudentComponent } from './day4-practice-student.component';

describe('Day4PracticeStudentComponent', () => {
  let component: Day4PracticeStudentComponent;
  let fixture: ComponentFixture<Day4PracticeStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day4PracticeStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day4PracticeStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
