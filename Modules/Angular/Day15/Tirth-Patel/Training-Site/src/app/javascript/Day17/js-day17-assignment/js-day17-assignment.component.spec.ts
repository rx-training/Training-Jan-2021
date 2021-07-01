import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsDay17AssignmentComponent } from './js-day17-assignment.component';

describe('JsDay17AssignmentComponent', () => {
  let component: JsDay17AssignmentComponent;
  let fixture: ComponentFixture<JsDay17AssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsDay17AssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsDay17AssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
