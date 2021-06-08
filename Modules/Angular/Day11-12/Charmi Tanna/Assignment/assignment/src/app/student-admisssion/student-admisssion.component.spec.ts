import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAdmisssionComponent } from './student-admisssion.component';

describe('StudentAdmisssionComponent', () => {
  let component: StudentAdmisssionComponent;
  let fixture: ComponentFixture<StudentAdmisssionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAdmisssionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAdmisssionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
