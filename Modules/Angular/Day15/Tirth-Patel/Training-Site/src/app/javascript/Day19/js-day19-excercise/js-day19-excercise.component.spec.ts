import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsDay19ExcerciseComponent } from './js-day19-excercise.component';

describe('JsDay19ExcerciseComponent', () => {
  let component: JsDay19ExcerciseComponent;
  let fixture: ComponentFixture<JsDay19ExcerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsDay19ExcerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsDay19ExcerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
