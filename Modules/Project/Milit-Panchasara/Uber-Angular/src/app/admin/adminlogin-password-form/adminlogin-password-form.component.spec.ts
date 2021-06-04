import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminloginPasswordFormComponent } from './adminlogin-password-form.component';

describe('AdminloginPasswordFormComponent', () => {
  let component: AdminloginPasswordFormComponent;
  let fixture: ComponentFixture<AdminloginPasswordFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminloginPasswordFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminloginPasswordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
