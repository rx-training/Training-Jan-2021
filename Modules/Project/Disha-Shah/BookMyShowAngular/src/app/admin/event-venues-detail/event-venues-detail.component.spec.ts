import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventVenuesDetailComponent } from './event-venues-detail.component';

describe('EventVenuesDetailComponent', () => {
  let component: EventVenuesDetailComponent;
  let fixture: ComponentFixture<EventVenuesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventVenuesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventVenuesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
