import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5AssignmentComponent } from './day5-assignment.component';

describe('Day5AssignmentComponent', () => {
  let component: Day5AssignmentComponent;
  let fixture: ComponentFixture<Day5AssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day5AssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day5AssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
