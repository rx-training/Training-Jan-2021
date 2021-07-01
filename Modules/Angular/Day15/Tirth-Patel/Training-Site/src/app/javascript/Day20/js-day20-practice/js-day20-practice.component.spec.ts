import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsDay20PracticeComponent } from './js-day20-practice.component';

describe('JsDay20PracticeComponent', () => {
  let component: JsDay20PracticeComponent;
  let fixture: ComponentFixture<JsDay20PracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsDay20PracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsDay20PracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
