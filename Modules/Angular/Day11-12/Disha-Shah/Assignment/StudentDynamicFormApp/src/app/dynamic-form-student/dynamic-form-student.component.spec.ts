import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormStudentComponent } from './dynamic-form-student.component';

describe('DynamicFormStudentComponent', () => {
  let component: DynamicFormStudentComponent;
  let fixture: ComponentFixture<DynamicFormStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFormStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
