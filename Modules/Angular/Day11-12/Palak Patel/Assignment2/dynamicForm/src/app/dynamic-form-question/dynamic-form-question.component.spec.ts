import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormQuestionComponen } from './dynamic-form-question.component';

describe('DynamicFormQuestionComponentComponent', () => {
  let component: DynamicFormQuestionComponen;
  let fixture: ComponentFixture<DynamicFormQuestionComponen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFormQuestionComponen ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormQuestionComponen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
