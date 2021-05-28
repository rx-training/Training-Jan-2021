import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsDay18AssignmentComponent } from './js-day18-assignment.component';

describe('JsDay18AssignmentComponent', () => {
  let component: JsDay18AssignmentComponent;
  let fixture: ComponentFixture<JsDay18AssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsDay18AssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsDay18AssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
