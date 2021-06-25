import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobByCategoryComponent } from './job-by-category.component';

describe('JobByCategoryComponent', () => {
  let component: JobByCategoryComponent;
  let fixture: ComponentFixture<JobByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobByCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
