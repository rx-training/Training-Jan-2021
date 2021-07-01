import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelContactCrudComponent } from './hotel-contact-crud.component';

describe('HotelContactCrudComponent', () => {
  let component: HotelContactCrudComponent;
  let fixture: ComponentFixture<HotelContactCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelContactCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelContactCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
