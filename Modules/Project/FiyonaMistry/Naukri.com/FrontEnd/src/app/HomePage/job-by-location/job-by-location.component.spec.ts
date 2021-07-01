import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobByLocationComponent } from './job-by-location.component';

describe('JobByLocationComponent', () => {
  let component: JobByLocationComponent;
  let fixture: ComponentFixture<JobByLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobByLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobByLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
