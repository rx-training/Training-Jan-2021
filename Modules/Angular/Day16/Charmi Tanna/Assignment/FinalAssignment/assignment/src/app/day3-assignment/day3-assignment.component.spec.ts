import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3AssignmentComponent } from './day3-assignment.component';

describe('Day3AssignmentComponent', () => {
  let component: Day3AssignmentComponent;
  let fixture: ComponentFixture<Day3AssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day3AssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day3AssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
