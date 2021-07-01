import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedMoviesComponent } from './recommended-movies.component';

describe('RecommendedMoviesComponent', () => {
  let component: RecommendedMoviesComponent;
  let fixture: ComponentFixture<RecommendedMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendedMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
