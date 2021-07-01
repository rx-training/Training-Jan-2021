import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEventVenueComponent } from './edit-event-venue.component';

describe('EditEventVenueComponent', () => {
  let component: EditEventVenueComponent;
  let fixture: ComponentFixture<EditEventVenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEventVenueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEventVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
