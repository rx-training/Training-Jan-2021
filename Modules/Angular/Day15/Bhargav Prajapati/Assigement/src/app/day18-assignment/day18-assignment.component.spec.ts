import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day18AssignmentComponent } from './day18-assignment.component';

describe('Day18AssignmentComponent', () => {
  let component: Day18AssignmentComponent;
  let fixture: ComponentFixture<Day18AssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day18AssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day18AssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
