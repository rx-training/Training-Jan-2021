import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSellerInfoComponent } from './admin-seller-info.component';

describe('AdminSellerInfoComponent', () => {
  let component: AdminSellerInfoComponent;
  let fixture: ComponentFixture<AdminSellerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSellerInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSellerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
