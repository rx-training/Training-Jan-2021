import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4AssignmentComponent } from './day4-assignment.component';

describe('Day4AssignmentComponent', () => {
  let component: Day4AssignmentComponent;
  let fixture: ComponentFixture<Day4AssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day4AssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day4AssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
