import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverLoginPasswordFormComponent } from './driver-login-password-form.component';

describe('DriverLoginPasswordFormComponent', () => {
  let component: DriverLoginPasswordFormComponent;
  let fixture: ComponentFixture<DriverLoginPasswordFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverLoginPasswordFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverLoginPasswordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
