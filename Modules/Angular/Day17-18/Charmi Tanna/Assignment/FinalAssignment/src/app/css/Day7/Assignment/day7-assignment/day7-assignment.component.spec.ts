import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day7AssignmentComponent } from './day7-assignment.component';

describe('Day7AssignmentComponent', () => {
  let component: Day7AssignmentComponent;
  let fixture: ComponentFixture<Day7AssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day7AssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day7AssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
