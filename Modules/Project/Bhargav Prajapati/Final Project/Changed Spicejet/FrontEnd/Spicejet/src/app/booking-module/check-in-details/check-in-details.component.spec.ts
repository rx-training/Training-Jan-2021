import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInDetailsComponent } from './check-in-details.component';

describe('CheckInDetailsComponent', () => {
  let component: CheckInDetailsComponent;
  let fixture: ComponentFixture<CheckInDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckInDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckInDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
