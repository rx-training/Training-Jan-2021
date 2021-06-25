import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobGalleryComponent } from './job-gallery.component';

describe('JobGalleryComponent', () => {
  let component: JobGalleryComponent;
  let fixture: ComponentFixture<JobGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
