import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDriverListComponent } from './admin-driver-list.component';

describe('AdminDriverListComponent', () => {
  let component: AdminDriverListComponent;
  let fixture: ComponentFixture<AdminDriverListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDriverListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDriverListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
