import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSeatComponent } from './book-seat.component';

describe('BookSeatComponent', () => {
  let component: BookSeatComponent;
  let fixture: ComponentFixture<BookSeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookSeatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
