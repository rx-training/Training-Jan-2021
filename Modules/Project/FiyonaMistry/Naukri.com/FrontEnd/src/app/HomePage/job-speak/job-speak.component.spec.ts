import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSpeakComponent } from './job-speak.component';

describe('JobSpeakComponent', () => {
  let component: JobSpeakComponent;
  let fixture: ComponentFixture<JobSpeakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobSpeakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobSpeakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
