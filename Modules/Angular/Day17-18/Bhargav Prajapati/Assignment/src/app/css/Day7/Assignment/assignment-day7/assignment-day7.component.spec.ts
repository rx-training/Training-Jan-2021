import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentDay7Component } from './assignment-day7.component';

describe('AssignmentDay7Component', () => {
  let component: AssignmentDay7Component;
  let fixture: ComponentFixture<AssignmentDay7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentDay7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentDay7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
