import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsDay16AssignmentComponent } from './js-day16-assignment.component';

describe('JsDay16AssignmentComponent', () => {
  let component: JsDay16AssignmentComponent;
  let fixture: ComponentFixture<JsDay16AssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsDay16AssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsDay16AssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
