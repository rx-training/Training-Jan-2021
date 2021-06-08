import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day20AssignmentComponent } from './day20-assignment.component';

describe('Day20AssignmentComponent', () => {
  let component: Day20AssignmentComponent;
  let fixture: ComponentFixture<Day20AssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day20AssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day20AssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
