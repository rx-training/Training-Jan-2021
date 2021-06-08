import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5assignmentComponent } from './day5assignment.component';

describe('Day5assignmentComponent', () => {
  let component: Day5assignmentComponent;
  let fixture: ComponentFixture<Day5assignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day5assignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day5assignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
