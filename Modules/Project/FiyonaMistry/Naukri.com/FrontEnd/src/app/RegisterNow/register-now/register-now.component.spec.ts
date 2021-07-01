import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNowComponent } from './register-now.component';

describe('RegisterNowComponent', () => {
  let component: RegisterNowComponent;
  let fixture: ComponentFixture<RegisterNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterNowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
