import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRiderListComponent } from './admin-rider-list.component';

describe('AdminRiderListComponent', () => {
  let component: AdminRiderListComponent;
  let fixture: ComponentFixture<AdminRiderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRiderListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRiderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
