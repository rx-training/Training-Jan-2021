import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventVenuesComponent } from './event-venues.component';

describe('EventVenuesComponent', () => {
  let component: EventVenuesComponent;
  let fixture: ComponentFixture<EventVenuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventVenuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventVenuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
