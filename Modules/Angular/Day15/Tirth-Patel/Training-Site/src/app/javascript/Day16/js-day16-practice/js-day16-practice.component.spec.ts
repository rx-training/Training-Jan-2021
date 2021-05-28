import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsDay16PracticeComponent } from './js-day16-practice.component';

describe('JsDay16PracticeComponent', () => {
  let component: JsDay16PracticeComponent;
  let fixture: ComponentFixture<JsDay16PracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsDay16PracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsDay16PracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
