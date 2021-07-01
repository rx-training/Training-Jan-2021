import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day16assignmentComponent } from './day16assignment.component';

describe('Day16assignmentComponent', () => {
  let component: Day16assignmentComponent;
  let fixture: ComponentFixture<Day16assignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day16assignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day16assignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
