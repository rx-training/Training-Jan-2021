import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAssingmentComponent } from './student-assingment.component';

describe('StudentAssingmentComponent', () => {
  let component: StudentAssingmentComponent;
  let fixture: ComponentFixture<StudentAssingmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAssingmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAssingmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
