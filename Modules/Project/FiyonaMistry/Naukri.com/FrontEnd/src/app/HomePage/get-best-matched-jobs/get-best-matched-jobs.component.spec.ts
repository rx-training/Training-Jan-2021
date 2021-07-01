import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBestMatchedJobsComponent } from './get-best-matched-jobs.component';

describe('GetBestMatchedJobsComponent', () => {
  let component: GetBestMatchedJobsComponent;
  let fixture: ComponentFixture<GetBestMatchedJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetBestMatchedJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBestMatchedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
