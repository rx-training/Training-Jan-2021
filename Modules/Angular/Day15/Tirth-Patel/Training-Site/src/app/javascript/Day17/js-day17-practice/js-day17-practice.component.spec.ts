import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsDay17PracticeComponent } from './js-day17-practice.component';

describe('JsDay17PracticeComponent', () => {
  let component: JsDay17PracticeComponent;
  let fixture: ComponentFixture<JsDay17PracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsDay17PracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsDay17PracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
