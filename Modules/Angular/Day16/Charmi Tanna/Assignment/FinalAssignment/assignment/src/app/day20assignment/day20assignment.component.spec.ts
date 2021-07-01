import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day20assignmentComponent } from './day20assignment.component';

describe('Day20assignmentComponent', () => {
  let component: Day20assignmentComponent;
  let fixture: ComponentFixture<Day20assignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day20assignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day20assignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
