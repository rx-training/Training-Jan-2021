import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentDay8Component } from './assignment-day8.component';

describe('AssignmentDay8Component', () => {
  let component: AssignmentDay8Component;
  let fixture: ComponentFixture<AssignmentDay8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentDay8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentDay8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
