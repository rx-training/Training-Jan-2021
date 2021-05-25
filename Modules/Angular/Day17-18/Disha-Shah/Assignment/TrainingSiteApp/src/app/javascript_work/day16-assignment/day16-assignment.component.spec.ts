import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day16AssignmentComponent } from './day16-assignment.component';

describe('Day16AssignmentComponent', () => {
  let component: Day16AssignmentComponent;
  let fixture: ComponentFixture<Day16AssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day16AssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day16AssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
