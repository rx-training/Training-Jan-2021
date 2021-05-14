import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbuilderPracticeComponent } from './formbuilder-practice.component';

describe('FormbuilderPracticeComponent', () => {
  let component: FormbuilderPracticeComponent;
  let fixture: ComponentFixture<FormbuilderPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormbuilderPracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormbuilderPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
