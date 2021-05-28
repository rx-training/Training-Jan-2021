import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6PracticAssignmentComponent } from './day6-practic-assignment.component';

describe('Day6PracticAssignmentComponent', () => {
  let component: Day6PracticAssignmentComponent;
  let fixture: ComponentFixture<Day6PracticAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6PracticAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6PracticAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
