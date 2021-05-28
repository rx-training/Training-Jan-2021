import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsDay18ExcerciseComponent } from './js-day18-excercise.component';

describe('JsDay18ExcerciseComponent', () => {
  let component: JsDay18ExcerciseComponent;
  let fixture: ComponentFixture<JsDay18ExcerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsDay18ExcerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsDay18ExcerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
