import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAssingmentComponent } from './form-assingment.component';

describe('FormAssingmentComponent', () => {
  let component: FormAssingmentComponent;
  let fixture: ComponentFixture<FormAssingmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAssingmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAssingmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
