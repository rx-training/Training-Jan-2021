import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTripListComponent } from './admin-trip-list.component';

describe('AdminTripListComponent', () => {
  let component: AdminTripListComponent;
  let fixture: ComponentFixture<AdminTripListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTripListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTripListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
