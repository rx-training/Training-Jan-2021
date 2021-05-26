import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day8AssignmentComponent } from './day8-assignment.component';

describe('Day8AssignmentComponent', () => {
  let component: Day8AssignmentComponent;
  let fixture: ComponentFixture<Day8AssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day8AssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day8AssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
