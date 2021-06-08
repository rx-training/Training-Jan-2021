import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFormBuilderComponent } from './student-form-builder.component';

describe('StudentFormBuilderComponent', () => {
  let component: StudentFormBuilderComponent;
  let fixture: ComponentFixture<StudentFormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentFormBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
