import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsDay20ExcerciseComponent } from './js-day20-excercise.component';

describe('JsDay20ExcerciseComponent', () => {
  let component: JsDay20ExcerciseComponent;
  let fixture: ComponentFixture<JsDay20ExcerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsDay20ExcerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsDay20ExcerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
