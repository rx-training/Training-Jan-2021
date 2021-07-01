import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchJobsOnGoComponent } from './search-jobs-on-go.component';

describe('SearchJobsOnGoComponent', () => {
  let component: SearchJobsOnGoComponent;
  let fixture: ComponentFixture<SearchJobsOnGoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchJobsOnGoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchJobsOnGoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
