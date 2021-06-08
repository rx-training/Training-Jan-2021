import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day18assignmentComponent } from './day18assignment.component';

describe('Day18assignmentComponent', () => {
  let component: Day18assignmentComponent;
  let fixture: ComponentFixture<Day18assignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day18assignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day18assignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
