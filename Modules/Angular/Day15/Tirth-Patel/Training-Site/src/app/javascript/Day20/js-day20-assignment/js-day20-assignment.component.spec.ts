import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsDay20AssignmentComponent } from './js-day20-assignment.component';

describe('JsDay20AssignmentComponent', () => {
  let component: JsDay20AssignmentComponent;
  let fixture: ComponentFixture<JsDay20AssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsDay20AssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsDay20AssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
