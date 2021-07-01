import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsassignmentComponent } from './jsassignment.component';

describe('JsassignmentComponent', () => {
  let component: JsassignmentComponent;
  let fixture: ComponentFixture<JsassignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsassignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
