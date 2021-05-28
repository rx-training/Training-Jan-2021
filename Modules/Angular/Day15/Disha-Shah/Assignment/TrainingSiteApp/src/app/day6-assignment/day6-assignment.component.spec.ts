import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6AssignmentComponent } from './day6-assignment.component';

describe('Day6AssignmentComponent', () => {
  let component: Day6AssignmentComponent;
  let fixture: ComponentFixture<Day6AssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6AssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6AssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
