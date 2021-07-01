import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAdmissionFormComponent } from './student-admission-form.component';

describe('StudentAdmissionFormComponent', () => {
  let component: StudentAdmissionFormComponent;
  let fixture: ComponentFixture<StudentAdmissionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAdmissionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAdmissionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
