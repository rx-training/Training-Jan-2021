import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAllMoviesEventsComponent } from './home-all-movies-events.component';

describe('HomeAllMoviesEventsComponent', () => {
  let component: HomeAllMoviesEventsComponent;
  let fixture: ComponentFixture<HomeAllMoviesEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAllMoviesEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAllMoviesEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
