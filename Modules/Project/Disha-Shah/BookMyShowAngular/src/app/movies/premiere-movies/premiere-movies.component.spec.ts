import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiereMoviesComponent } from './premiere-movies.component';

describe('PremiereMoviesComponent', () => {
  let component: PremiereMoviesComponent;
  let fixture: ComponentFixture<PremiereMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremiereMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiereMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
