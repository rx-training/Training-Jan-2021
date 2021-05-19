import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputPracticeComponent } from './input-output-practice.component';

describe('InputOutputPracticeComponent', () => {
  let component: InputOutputPracticeComponent;
  let fixture: ComponentFixture<InputOutputPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputOutputPracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOutputPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
