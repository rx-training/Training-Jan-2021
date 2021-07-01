import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyConfirmationComponent } from './apply-confirmation.component';

describe('ApplyConfirmationComponent', () => {
  let component: ApplyConfirmationComponent;
  let fixture: ComponentFixture<ApplyConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
