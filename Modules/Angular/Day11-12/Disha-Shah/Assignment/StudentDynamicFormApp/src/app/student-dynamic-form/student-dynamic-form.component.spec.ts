import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDynamicFormComponent } from './student-dynamic-form.component';

describe('StudentDynamicFormComponent', () => {
  let component: StudentDynamicFormComponent;
  let fixture: ComponentFixture<StudentDynamicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDynamicFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
