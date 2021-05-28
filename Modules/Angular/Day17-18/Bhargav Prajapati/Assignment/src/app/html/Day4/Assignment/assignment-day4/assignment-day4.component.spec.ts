import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentDay4Component } from './assignment-day4.component';

describe('AssignmentDay4Component', () => {
  let component: AssignmentDay4Component;
  let fixture: ComponentFixture<AssignmentDay4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentDay4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentDay4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
