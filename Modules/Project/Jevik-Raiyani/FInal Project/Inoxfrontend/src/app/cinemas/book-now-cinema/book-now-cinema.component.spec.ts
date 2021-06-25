import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookNowCinemaComponent } from './book-now-cinema.component';

describe('BookNowCinemaComponent', () => {
  let component: BookNowCinemaComponent;
  let fixture: ComponentFixture<BookNowCinemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookNowCinemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookNowCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
