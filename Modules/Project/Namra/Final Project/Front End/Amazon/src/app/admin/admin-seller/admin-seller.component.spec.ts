import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSellerComponent } from './admin-seller.component';

describe('AdminSellerComponent', () => {
  let component: AdminSellerComponent;
  let fixture: ComponentFixture<AdminSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
