import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchJobResultsComponent } from './search-job-results.component';

describe('SearchJobResultsComponent', () => {
  let component: SearchJobResultsComponent;
  let fixture: ComponentFixture<SearchJobResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchJobResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchJobResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
