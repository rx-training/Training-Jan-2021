import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day15AssignmentComponent } from './day15-assignment.component';

describe('Day15AssignmentComponent', () => {
  let component: Day15AssignmentComponent;
  let fixture: ComponentFixture<Day15AssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day15AssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day15AssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
