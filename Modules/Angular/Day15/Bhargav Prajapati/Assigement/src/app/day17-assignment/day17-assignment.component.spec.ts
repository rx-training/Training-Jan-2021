import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day17AssignmentComponent } from './day17-assignment.component';

describe('Day17AssignmentComponent', () => {
  let component: Day17AssignmentComponent;
  let fixture: ComponentFixture<Day17AssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day17AssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day17AssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
