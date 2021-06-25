import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingModuleComponent } from './booking-module.component';

describe('BookingModuleComponent', () => {
  let component: BookingModuleComponent;
  let fixture: ComponentFixture<BookingModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
