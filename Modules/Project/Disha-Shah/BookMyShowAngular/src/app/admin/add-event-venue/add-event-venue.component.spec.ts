import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventVenueComponent } from './add-event-venue.component';

describe('AddEventVenueComponent', () => {
  let component: AddEventVenueComponent;
  let fixture: ComponentFixture<AddEventVenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEventVenueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEventVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
