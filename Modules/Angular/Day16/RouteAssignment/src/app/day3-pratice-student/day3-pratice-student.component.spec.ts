import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3PraticeStudentComponent } from './day3-pratice-student.component';

describe('Day3PraticeStudentComponent', () => {
  let component: Day3PraticeStudentComponent;
  let fixture: ComponentFixture<Day3PraticeStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day3PraticeStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day3PraticeStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
