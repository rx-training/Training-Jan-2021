import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningCoursesComponent } from './learning-courses.component';

describe('LearningCoursesComponent', () => {
  let component: LearningCoursesComponent;
  let fixture: ComponentFixture<LearningCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
