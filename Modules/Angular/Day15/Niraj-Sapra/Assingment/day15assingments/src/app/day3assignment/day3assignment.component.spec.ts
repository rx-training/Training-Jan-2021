import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3assignmentComponent } from './day3assignment.component';

describe('Day3assignmentComponent', () => {
  let component: Day3assignmentComponent;
  let fixture: ComponentFixture<Day3assignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day3assignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day3assignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
